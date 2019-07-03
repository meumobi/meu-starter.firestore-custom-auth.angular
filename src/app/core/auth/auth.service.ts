import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  public login(token: string) {
    console.log(token);
    return this.afAuth.auth.signInWithCustomToken(token).then(
      data => {
        return true;
      }
    );
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

  public getAuthStateObserver() {
    return this.afAuth.authState;
  }
}
