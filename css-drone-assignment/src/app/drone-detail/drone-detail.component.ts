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

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.initDrone(id);
  }

  initDrone(droneID: string){
    this.droneService.getDrone(droneID).subscribe(droneFromDb => {
        this.drone = droneFromDb;
    });
  }

  onBackButtonClick(): void {
    this.router.navigate(['/drones']);
  }
}
