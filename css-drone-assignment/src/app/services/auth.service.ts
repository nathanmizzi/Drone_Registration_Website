import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
  private firestoreAuth: AngularFireAuth) { }

  logIn(email: string, password: string){
    this.firestoreAuth.signInWithEmailAndPassword(email, password).then(value => {
      console.log('Login Successful');
      //this.router.navigate(['/login']);
    }).catch(err => {
      console.log('Log-In Failed');
    });
  }

  logOut(){
    this.firestoreAuth.signOut().then( () => {
      this.router.navigate(['/login']);
    })
  }

  isUserLoggedIn(): boolean{
    if(this.firestoreAuth.currentUser){
      return true;
    }else{
      return false;
    }
  }

  currentUserRole(): string{
    var currectUserRole; 

    this.firestoreAuth.currentUser.then(currentUser => {
      currentUser.getIdTokenResult().then(idTokenResult => {
        currectUserRole = idTokenResult.claims.role;
      })
    })

    return currectUserRole;
  }

}
