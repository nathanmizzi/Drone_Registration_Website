import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Drone } from '../dto/drone.dto';

@Injectable({
  providedIn: 'root'
})

export class DroneDataService {
  dronesCollection: AngularFirestoreCollection<Drone> | undefined;
  drones: Observable<any[]>;
  droneToSend: Observable<Drone>;

  constructor(public afs: AngularFirestore) { 
    this.drones = this.afs.collection('drones').valueChanges();
  }

  getDrones(): Observable<Drone[]>{
    return this.drones;
  }

  getDrone(id: number): Observable<Drone[]>{

    var test = this.afs.collection<Drone>('drones', ref => ref.where('id', '==', id)).valueChanges();

    return test;

  }

}
