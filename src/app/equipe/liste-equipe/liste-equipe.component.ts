import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Core/Models/equipe';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/Core/services/equipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-equipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListeEquipeComponent implements OnInit {
  constructor(private route:Router, private Equipes:EquipeService) { }
    listeEquipe:Equipe[] = [];
  
    ngOnInit(): void {
      this.getEquipe();
  
    }
  
    getEquipe(){
      this.Equipes.getAllEquipes().subscribe(data => this.listeEquipe=data);
      console.assert(this.Equipes);
    }
    deleteEquipe(id:any){
      this.Equipes.deleteEquipe(Number(id)).subscribe( () =>this.getEquipe() );
    }
  }