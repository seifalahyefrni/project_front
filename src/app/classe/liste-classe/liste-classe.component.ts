import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/Core/Models/classe';
import { ClasseService } from 'src/app/Core/services/classe.service';

@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css']
})
export class ListeClasseComponent implements OnInit {
  constructor(private route:Router, private Classes:ClasseService) { }
  listeClasse:Classe[] = [];

  ngOnInit(): void {
    this.getClasse();

  }

  getClasse(){
    this.Classes.getAllClasses().subscribe(data => this.listeClasse=data);
    console.assert(this.Classes);
  }
  deleteClasse(id:any){
    this.Classes.deleteClasse(Number(id)).subscribe( () =>this.getClasse() );
  }
}