import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { EditDroneComponent } from './edit-drone/edit-drone.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    AddDroneComponent,
    EditDroneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
