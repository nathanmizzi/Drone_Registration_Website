import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Drone } from '../dto/drone.dto';

@Injectable({
  providedIn: 'root'
})

export class DroneDataService {
  dronesCollection: AngularFirestoreCollection<Drone> | undefined;
  drones: Observable<any[]>;

  constructor(public afs: AngularFirestore) { 
    this.drones = this.afs.collection('drones').valueChanges();
  }

  getDrones(): Observable<any[]>{
    return this.drones;
  }

}
