import { Injectable } from '@angular/core';

import { CollectionReference, DocumentData, collection, doc, addDoc,  deleteDoc,  updateDoc, } from '@firebase/firestore';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDBService {

  private restaurantsCollection!: CollectionReference<DocumentData>

  constructor(
    private firestore: Firestore
  ) { 
    this.restaurantsCollection = collection(this.firestore, 'restaurants')
  }

  getAll() {
    return collectionData(this.restaurantsCollection, {
      idField: 'id',
    }) as Observable<Restaurant[]>
  }

  get(id: string) {
    const restaurantDocumentReference = doc(this.firestore, `restaurants/${id}`)
    return docData(restaurantDocumentReference, { idField: 'id' })
  }

  create(restaurant: Restaurant) {
    return addDoc(this.restaurantsCollection, restaurant)
  }

  update(restaurant: Restaurant) {
    const restaurantDocumentReference = doc(
      this.firestore,
      `restaurants/${restaurant.id}`
    )
    return updateDoc(restaurantDocumentReference, { ...restaurant })
  }

  delete(id: string) {
    const restaurantDocumentReference = doc(this.firestore, `restaurants/${id}`)
    return deleteDoc(restaurantDocumentReference)
  }
}
