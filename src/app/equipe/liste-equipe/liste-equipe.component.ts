import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Core/Models/equipe';
import { EquipeService } from 'src/app/Core/services/equipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-equipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListeEquipeComponent implements OnInit {

  constructor(private route:Router, private Equipes:EquipeService) {  }
  listeEquipe:Equipe[]=[];
  
  ngOnInit(): void {
  }

  getDataFormService(){
    this.Equipes.getAllEquipes().subscribe(data=>this.listeEquipe=data);
    }

    getOneDataFormService(id:number){
      this.Equipes.getEquipeById(id).subscribe(data=>this.listeEquipe=data);
      }
   
 
  updateMyObject(id:number,Equipe:Equipe){
    this.Equipes.updateData(id,Equipe).subscribe();
    }
  deleteMyObject(id:number){
    this.Equipes. deleteData(id).subscribe();
    }

}
