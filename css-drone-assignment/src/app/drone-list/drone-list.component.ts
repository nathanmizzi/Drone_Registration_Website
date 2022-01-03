import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { AuthService } from '../services/auth.service';
import { DroneDataService } from '../services/drone-data.service';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private droneService: DroneDataService,
    private authService: AuthService) { 
  }

  drones: Drone[] = [];
  currentUserRole: string;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
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

    this.initialiseDroneArray();
  }

  setUserRole(asyncParam: string){
    this.currentUserRole = asyncParam;
  }

  initialiseDroneArray(): void{
    this.droneService.getDrones().subscribe((res: Drone[]) => {
      this.drones = res;
    });
  }

  deleteDrone(droneID: string){
    this.droneService.deleteDrone(droneID);
  }

  getDroneDetails(droneID: string){
    this.router.navigate(['/drones/' + droneID]);
  }

  updateDroneDetails(droneID: string){
    this.router.navigate(['/drones/edit/' + droneID]);
  }

}
