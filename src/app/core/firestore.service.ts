import { Injectable } from '@angular/core';

import { CollectionReference, DocumentData, collection, doc, addDoc,  deleteDoc,  updateDoc, } from '@firebase/firestore';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private restaurantCollection!: CollectionReference<DocumentData>

  constructor(
    private readonly firestore: Firestore
  ) { 
    this.restaurantCollection = collection(this.firestore, 'restaurant')
  }

  getAll() {
    return collectionData(this.restaurantCollection, {
      idField: 'id',
    }) as Observable<Restaurant[]>
  }

  get(id: string) {
    const restaurantDocumentReference = doc(this.firestore, `restaurant/${id}`)
    return docData(restaurantDocumentReference, { idField: 'id' })
  }

  create(restaurant: Restaurant) {
    return addDoc(this.restaurantCollection, restaurant)
  }

  update(restaurant: Restaurant) {
    const restaurantDocumentReference = doc(
      this.firestore,
      `restaurant/${restaurant.id}`
    )
    return updateDoc(restaurantDocumentReference, { ...restaurant })
  }

  delete(id: string) {
    const restaurantDocumentReference = doc(this.firestore, `restaurant/${id}`)
    return deleteDoc(restaurantDocumentReference)
  }
}
