import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from './dto/user.dto';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  title = 'Drone Registry';
  currentUserRole: string;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        if(this.authService.isLoggedIn){
          this.authService.firestoreAuth.user.subscribe(async currentUser => {
            if(currentUser != null){
              this.isLoggedIn = true;
            }
    
            await currentUser.getIdTokenResult().then(idTokenResult => {
              this.setUserRole(idTokenResult.claims['role']);
            })
          });
        }
      }
   })
  }

  setUserRole(asyncParam: string){
    this.currentUserRole = asyncParam;
  }

  signOut(): void{
    this.isLoggedIn = false;
    this.currentUserRole = "";
    this.authService.logOut();
  }
}
