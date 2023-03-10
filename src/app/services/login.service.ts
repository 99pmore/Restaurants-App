import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signInAnonymously, signOut, } from '@angular/fire/auth';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) { }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  loginAnonymously() {
    return signInAnonymously(this.auth);
  }

  // saveUserData(user: User) {
  //   const userRef = this.firestore.collection('users').doc(user.uid)

  //   return userRef.set({
  //     displayName: user.displayName,
  //     email: user.email,
  //     photoURL: user.photoURL
  //   })
  // }

}
