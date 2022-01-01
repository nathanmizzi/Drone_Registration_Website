import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { DroneDataService } from '../services/drone-data.service';

@Component({
  selector: 'app-add-drone',
  templateUrl: './add-drone.component.html',
  styleUrls: ['./add-drone.component.css']
})
export class AddDroneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private droneService: DroneDataService,
    private router: Router) { }

  droneForm: FormGroup;
  droneToAdd: Drone;

  ngOnInit(): void {
    this.droneForm = this.formBuilder.group({
      serialNumber: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      ownerIdNumber: ['', [Validators.required]],
      ownerFirstName: ['', [Validators.required]],
      ownerLastName: ['', [Validators.required]],
      ownerContactNumberCountryCode: ['', [Validators.required]],
      ownerContactNumber: ['', [Validators.required]],
      ownerEmail: ['', [Validators.required]],
    });
  }

  submitDroneForm(){
   this.droneToAdd = this.droneForm.value;
   this.droneService.addDrone(this.droneToAdd);
   this.getDroneList();
  }

  getDroneList(){
    this.router.navigate(['/drones']);
  }


}
