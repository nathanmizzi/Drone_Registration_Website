import { Component, OnInit } from '@angular/core';
import { Drone } from '../dto/drone.dto';

@Component({
  selector: 'app-edit-drone',
  templateUrl: './edit-drone.component.html',
  styleUrls: ['./edit-drone.component.css']
})
export class EditDroneComponent implements OnInit {

  constructor() { }

  drone: Drone = new Drone(
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

  ngOnInit(): void {
    this.initDrone();
  }

  initDrone(){

  }

}
