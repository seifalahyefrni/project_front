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

  getAllUsers(){
   return this.http.get<Departement[]>(this.url);
  }
}
