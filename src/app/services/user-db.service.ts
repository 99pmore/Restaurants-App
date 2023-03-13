import { Injectable } from '@angular/core';

import { User } from 'firebase/auth';
import { CollectionReference, DocumentData, collection, doc, addDoc,  deleteDoc,  updateDoc, } from '@firebase/firestore';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDBService {

  private usersCollection!: CollectionReference<DocumentData>
  
  constructor(
    private firestore: Firestore,
    ) { 
      this.usersCollection = collection(this.firestore, 'users')
  }

  public create(user: User) {
    const userData: DocumentData = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      restaurants: []
    }
    return addDoc(this.usersCollection, userData)
  }

}
