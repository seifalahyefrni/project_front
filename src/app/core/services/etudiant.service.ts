import { Injectable } from '@angular/core';
import { Etudiant } from '../Models/etudiant';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'any' })
export class EtudiantService {


  etudiants: Etudiant[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:3000/Etudiants";

  getAllUsers(){
   return this.http.get<Etudiant[]>(this.url);
  }}
