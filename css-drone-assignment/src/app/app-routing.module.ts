import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { DroneDetailComponent } from './drone-detail/drone-detail.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { EditDroneComponent } from './edit-drone/edit-drone.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'drones', component: DroneListComponent},
  {path: 'drones/add', component: AddDroneComponent},
  {path: 'drones/edit/:id', component: EditDroneComponent},
  {path: 'drones/:id', component: DroneDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/drones', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
