import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { DroneDataService } from '../services/drone-data.service';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private droneService: DroneDataService) { 
  }

  drones: Drone[]  =[];

  ngOnInit(): void {
    this.initialiseDroneArray();
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
