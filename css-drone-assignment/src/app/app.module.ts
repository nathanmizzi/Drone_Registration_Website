import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { EditDroneComponent } from './edit-drone/edit-drone.component';

@NgModule({
  declarations: [
    AppComponent,
    DroneListComponent,
    AddDroneComponent,
    EditDroneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
