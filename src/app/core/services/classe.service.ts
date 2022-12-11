import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../Models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  listeClasses: Classe[]= [];


  //URL du Backend
  url = "http://localhost:3000/classe";
  constructor(private http:HttpClient) { }


  getAllClasses(){
    return this.http.get<Classe[]>(this.url);
  } 

  getClasseById(id: Number){
    return this.http.get<Classe>(this.url+'/'+id);
  }

  addClasse(Classe:Classe){
    return this.http.post(this.url,Classe);
  }

  deleteClasse(id:Number){
    return this.http.delete(this.url+'/'+id);
  }

  updateClasse(Classe:Classe){
    const ID = Number(Classe.idClasse);

    return this.http.put<Classe>(this.url+'/'+ID, Classe);
  }
}
