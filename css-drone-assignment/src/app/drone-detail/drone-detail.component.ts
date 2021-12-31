import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Drone } from '../dto/drone.dto';

@Component({
  selector: 'app-drone-detail',
  templateUrl: './drone-detail.component.html',
  styleUrls: ['./drone-detail.component.css']
})
export class DroneDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,db: AngularFirestore) { 
    this.items = db.collection('/items').valueChanges();
  }

  items: Observable<any[]>;

  drone: Drone = new Drone(
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
  );

  ngOnInit(): void {
    this.initDrone(); //To Be changed with API call
  }

  onBackButtonClick(): void {
    this.router.navigate(['/drones']);
  }

  initDrone(): void{

  }

}
