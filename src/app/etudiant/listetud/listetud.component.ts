import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Core/Models/etudiant';
import { EtudiantService } from 'src/app/Core/services/etudiant.service';

@Component({
  selector: 'app-listetud',
  templateUrl: './listetud.component.html',
  styleUrls: ['./listetud.component.css']
})
export class ListetudComponent implements OnInit {

  constructor(private route:Router, private etudiants: EtudiantService) { }


  listEtudiants:Etudiant[] = [];

  ngOnInit(): void {
      this.getEtudiants();
      //let nbr =  this.userS.fetchNbInList(this.listUsers, "accountCategory", "Customer");
  }

   getEtudiants(){
    this.etudiants.getAllUsers().subscribe(data => this.listEtudiants=data);
    console.assert(this.etudiants);
   }
}
