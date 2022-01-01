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

  constructor(private route: ActivatedRoute,private router: Router,private droneService: DroneDataService) { 
  }

  drones: Drone[]  =[];

  ngOnInit(): void {
    this.initialiseDroneArray();
  }

  initialiseDroneArray(): void{
    this.droneService.getDrones().subscribe(dronesFromDb => {
      dronesFromDb.forEach(drone => {
        this.drones.push(drone);
        console.log(dronesFromDb);
      });
    });
  }

  getDroneDetails(droneID: number){
    this.router.navigate(['/drones/' + droneID]);
  }

  updateDroneDetails(droneID: number){
    this.router.navigate(['/drones/edit/' + droneID]);
  }

}
