import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
  private firestoreAuth: AngularFireAuth) { }
  private isLoggedIn: boolean;


  logIn(hypotheticalUser: User){
    this.firestoreAuth.signInWithEmailAndPassword(hypotheticalUser.email, hypotheticalUser.password).then(value => {
      console.log('Login Successful');
      this.isLoggedIn = true;
      this.router.navigate(['/drones']);
    }).catch(err => {
      console.log('Log-In Failed');
    });
  }

  logOut(){
    this.firestoreAuth.signOut();
    console.log('Logout Successful');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean{
    if(this.isLoggedIn){
      return true;
    }else{
      return false;
    }
  }

  getCurrentUserRole(): string{
    var currectUserRole; 

    /*
    this.firestoreAuth.currentUser.then(currentUser => {
      currentUser.getIdTokenResult().then(idTokenResult => {
        currectUserRole = idTokenResult.claims.role;
      })
    })
    */
  
    this.firestoreAuth.user.subscribe(currentUser => {
      currentUser.getIdTokenResult().then(currentUserDetails => {
        return currentUserDetails.claims.role;
      })
    })
 
    return currectUserRole;
  }

}
