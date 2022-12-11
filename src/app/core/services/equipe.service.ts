import { Injectable } from '@angular/core';
import { Equipe } from '../Models/equipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classe } from '../Models/classe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  listeEquipes: Equipe[]= [];


  //URL du Backend
  url = "http://localhost:3000/equipe";
  constructor(private http:HttpClient) { }


  getAllEquipes(){
    return this.http.get<Equipe[]>(this.url);
  } 

  getEquipeById(id: Number){
    return this.http.get<Equipe>(this.url+'/'+id);
  }

  addEquipe(Equipe:Equipe){
    return this.http.post(this.url,Equipe);
  }

  deleteEquipe(id:Number){
    return this.http.delete(this.url+'/'+id);
  }

  updateEquipe(Equipe:Equipe){
    const ID = Number(Equipe.idEquipe);

    return this.http.put<Equipe>(this.url+'/'+ID, Equipe);
  }

}
