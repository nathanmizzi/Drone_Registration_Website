import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { DroneDataService } from '../services/drone-data.service';

@Component({
  selector: 'app-edit-drone',
  templateUrl: './edit-drone.component.html',
  styleUrls: ['./edit-drone.component.css']
})

export class EditDroneComponent implements OnInit {

  constructor(private droneService: DroneDataService,
     private route: ActivatedRoute,
      private formBuilder: FormBuilder) { }

  drone: Drone;
  droneBrands: string[] = [];
  editDroneForm: FormGroup;

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.initDrone(id);
    this.initBrands();
  }

  initDrone(droneID: string){
    this.droneService.getDrone(droneID).subscribe(droneFromDb => {
      this.drone = droneFromDb;

      this.editDroneForm = this.formBuilder.group({
        serialNumber: [droneFromDb.serialNumber, [Validators.required]],
        modelNumber: [droneFromDb.modelNumber, [Validators.required]],
        brand: [droneFromDb.brand, [Validators.required]],
        model: [droneFromDb.model, [Validators.required]],
        ownerIdNumber: [droneFromDb.ownerIdNumber, [Validators.required]],
        ownerFirstName: [droneFromDb.ownerFirstName, [Validators.required]],
        ownerLastName: [droneFromDb.ownerLastName, [Validators.required]],
        ownerContactNumberCountryCode: [droneFromDb.ownerContactNumberCountryCode, [Validators.required]],
        ownerContactNumber: [droneFromDb.ownerContactNumber, [Validators.required]],
        ownerEmail: [droneFromDb.ownerEmail, [Validators.required]],
      });
    });
  }

  initBrands(){
    this.droneBrands = ["DJI","Yuneec","UVify","Hubsan","Parrot","Freefly"];
  }

  submitEditDroneForm(){
    this.drone = this.editDroneForm.value;
    console.log(this.drone);
   }

}
