import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { EditDroneComponent } from './edit-drone/edit-drone.component';
import { DroneDataService } from './services/drone-data.service';
import { DroneDetailComponent } from './drone-detail/drone-detail.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    AddDroneComponent,
    EditDroneComponent,
    DroneDetailComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [DroneDataService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
