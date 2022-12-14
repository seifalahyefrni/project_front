import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/Models/Deaprtement';
import { DepartementService } from 'src/app/Core/services/departement.service';

@Component({
  selector: 'app-listedep',
  templateUrl: './listedep.component.html',
  styleUrls: ['./listedep.component.css'],
  providers: [DepartementService]
})
export class ListedepComponent implements OnInit {

  constructor(private route:Router, private departements:DepartementService) { }
  listdepartements:Departement[] = [];

  ngOnInit(): void {
    this.getdep();

  }

  getdep(){
    this.departements.getAllDepartements().subscribe(data => this.listdepartements=data);
    console.assert(this.departements);
  }
  deleteDepartement(id:any){
    this.departements.deleteDepartement(Number(id)).subscribe( () =>this.getdep() );
  }
  


}
