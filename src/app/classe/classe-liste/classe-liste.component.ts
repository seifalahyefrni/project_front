import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/Core/services/classe.service';
import { Classe } from 'src/app/Core/Models/classe';

@Component({
  selector: 'app-classe-liste',
  templateUrl: './classe-liste.component.html',
  styleUrls: ['./classe-liste.component.css']
})
export class ClasseListeComponent implements OnInit {

  constructor(private route:Router, private classes:ClasseService) {
   }
   listClass:Classe[]=[];
  ngOnInit(): void {
    this.getClasses();
  }
  getClasses(){
    this.classes.getAllClasses().subscribe(data => this.listClass=data);
    console.assert(this.listClass);
  }
}
