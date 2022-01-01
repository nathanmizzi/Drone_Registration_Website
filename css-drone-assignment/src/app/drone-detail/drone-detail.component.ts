import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';

import { DroneDataService } from '../services/drone-data.service';

@Component({
  selector: 'app-drone-detail',
  templateUrl: './drone-detail.component.html',
  styleUrls: ['./drone-detail.component.css']
})
export class DroneDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private droneService: DroneDataService
  ) { }

  drone: Drone;
  droneList: Drone[] = [];

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.initDroneVariables(id);
  }

  initDroneVariables(droneID: number): void{
    this.droneService.getDrones().subscribe(dronesFromDb => {
      dronesFromDb.forEach(drone => {
        this.droneList.push(drone);
        console.log('Added a Drone!');
      });
    });

    this.droneList.forEach(droneToCheck => {
      if(droneToCheck.id == droneID){
        this.drone = droneToCheck;
      }
    });

    this.drone = new Drone(
      1,
      "12345",
      "678",
      "Hubsan",
      "Flyer-500",
      "274417L",
      "Joseph",
      "Callahan",
      356,
      77825394,
      "JCallahan@gmail.com"
    );

  }

  onBackButtonClick(): void {
    this.router.navigate(['/drones']);
  }
}
