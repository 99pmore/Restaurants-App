import { UserDBService } from './user-db.service';
import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signInAnonymously, signOut, } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: Auth,
    private userDBService: UserDBService
  ) { }

  public async loginWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
    return await this.saveUser();
  }
  
  public async loginAnonymously() {
    await signInAnonymously(this.auth);
    return await this.saveUser();
  }

  private async saveUser() {
    const user = this.auth.currentUser
    if (user) {
      await this.userDBService.create(user)
    }
  }
  

}
