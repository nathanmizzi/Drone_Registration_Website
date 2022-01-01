import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Drone } from '../dto/drone.dto';

@Injectable({
  providedIn: 'root'
})

export class DroneDataService {
  dronesCollection: AngularFirestoreCollection<Drone>;
  drones: Observable<any[]>;
  droneDoc: AngularFirestoreDocument;

  constructor(public afs: AngularFirestore) { 

    this.dronesCollection = this.afs.collection('drones');

    this.drones = this.dronesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Drone;
        data.id = a.payload.doc.id;
        return data
      });
    }));
  }

  getDrones(): Observable<Drone[]>{
    return this.drones;
  }

  getDrone(id: string): Observable<Drone>{
    var droneToReturn = this.afs.collection<Drone>('drones').doc(id).valueChanges();
    return droneToReturn;
  }

  addDrone(droneToAdd: Drone){
    this.dronesCollection.add(droneToAdd);
  }

  deleteDrone(droneIdToDelete: string){
    this.droneDoc = this.afs.doc('drones/' + droneIdToDelete);
    this.droneDoc.delete();
  }

}
