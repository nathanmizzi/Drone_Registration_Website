import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from '../dto/drone.dto';
import { AuthService } from '../services/auth.service';
import { DroneDataService } from '../services/drone-data.service';
import * as XLSX from 'xlsx'; 
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private droneService: DroneDataService,
    private authService: AuthService) { 
  }

  drones: Drone[] = [];
  currentUserRole: string;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.authService.firestoreAuth.user.subscribe(async currentUser => {
        if(currentUser != null){
          this.isLoggedIn = true;
        }

        await currentUser.getIdTokenResult().then(idTokenResult => {
          this.setUserRole(idTokenResult.claims['role']);
        })
      });
    }

    this.initialiseDroneArray();
  }

  setUserRole(asyncParam: string){
    this.currentUserRole = asyncParam;
  }

  initialiseDroneArray(): void{
    this.droneService.getDrones().subscribe((res: Drone[]) => {
      this.drones = res;
    });
  }

  deleteDrone(droneID: string){
    this.droneService.deleteDrone(droneID);
  }

  getDroneDetails(droneID: string){
    this.router.navigate(['/drones/' + droneID]);
  }

  updateDroneDetails(droneID: string){
    this.router.navigate(['/drones/edit/' + droneID]);
  }

  saveListToExcel(){
    let tableElement = document.getElementById('drone-table'); 

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet (tableElement);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ListOfAllDrones');

    XLSX.writeFile(wb, "Drone-Data");
  }

  saveListToPDF(){

    var head = [["Serial Number","Brand","Owner's Name","	Owner's Surname"]];
    var data = [];
    var doc = new jsPDF();

    for(var i = 0; i < this.drones.length; i++){
      data.push([this.drones[i].serialNumber,this.drones[i].brand,this.drones[i].ownerFirstName,this.drones[i].ownerLastName]);
    }

    doc.setFontSize(20);
    doc.text('Drones', 11, 8);
    doc.setFontSize(13);
    doc.setTextColor(100);

    (doc as any).autoTable({
      head: head,
      body: data,
      theme: 'plain',
      didDrawCell: data => {
        
      }
    })

    doc.save('myteamdetail.pdf');

  }

}
