import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
  public firestoreAuth: AngularFireAuth) { }
  public isLoggedIn: boolean = false;


  logIn(hypotheticalUser: User){
    this.firestoreAuth.signInWithEmailAndPassword(hypotheticalUser.email, hypotheticalUser.password);
    this.isLoggedIn = true;
    this.router.navigate(['/drones']);
  }

  logOut(){
    this.firestoreAuth.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
