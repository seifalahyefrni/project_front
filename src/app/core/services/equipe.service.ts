import { Injectable } from '@angular/core';
import { Equipe } from '../Models/equipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classe } from '../Models/classe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  departement: Equipe[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:3000/retrieve-all-equipes"
  url3 = "http://localhost:3000/update-equipe-by-id"
  url5 = "http://localhost:3000/Equipe";
  url6 = "http://localhost:3000/add-equipe";
  url7 = "http://localhost:3000/delete-equipe"

  
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}

  getAllEquipes(){
   return this.http.get<Equipe[]>(this.url);
  }
  
  getEquipeById(id:number){
    return this.http.get<Equipe[]>(this.url+'/'+id);
  }

  addData(Equipe:Equipe){
    return this.http.post<Equipe>(this. url6, Equipe, this.httpOptions); }

  updateData(id:number,Equipe:Equipe){
      return this.http.put<Equipe>(this.url3+'/'+ id, Equipe, this.httpOptions); }
  
  deleteData (id:number){
        return this.http.delete<Equipe>(this.url7+'/'+id);
        }
}
