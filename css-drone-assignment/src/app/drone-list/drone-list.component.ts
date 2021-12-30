import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  drones: Drone[]  =[];

  ngOnInit(): void {
    this.initialiseDroneArray();
  }

  initialiseDroneArray(): void{
      this.drones.push(new Drone(
          1,
          "12345",
          "678",
          "DJI",
          "Flyer-500",
          "274417L",
          "Joseph",
          "Callahan",
          356,
          77825394,
          "JCallahan@gmail.com"
      ));
  }

  getDroneDetails(droneID: number){
    this.router.navigate(['/drones/' + droneID]);
  }

  updateDroneDetails(droneID: number){
    this.router.navigate(['/drones/edit/' + droneID]);
  }

}
