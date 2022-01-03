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
  userLogged: boolean;

  ngOnInit(): void {
    this.userLogged = false;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {    
          if(this.authService.isUserLoggedIn()){
            this.userLogged = true;
          }else{
            this.userLogged = false;
          }
      }
    });
  }

  signOut(): void{
    this.authService.logOut();
  }
}
