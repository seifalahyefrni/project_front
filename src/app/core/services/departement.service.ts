import { Injectable } from '@angular/core';
import { Departement } from '../Models/Deaprtement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  departement: Departement[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:3000/departement";

  getAllDepartements(){
    return this.http.get<Departement[]>(this.url);
  }

  getDepartementById(id: Number){
    return this.http.get<Departement>(this.url+'/'+id);
  }

  addDepartement(departement:Departement){
    return this.http.post(this.url,departement);
  }

  deleteDepartement(id:Number){
    return this.http.delete(this.url+'/'+id);
  }

  updateDepartement(id:Number,departement:Departement){
    return this.http.put<Departement>(this.url+'/'+id, departement);
  }

}
