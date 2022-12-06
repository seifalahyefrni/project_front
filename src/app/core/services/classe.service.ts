import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../Models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  Classe: Classe[]= [];

  constructor( private http: HttpClient) { }
  url = "http://localhost:3000/Classe";
  getAllClasses(){
    return this.http.get<Classe[]>(this.url);
  }
  url1 = "http://localhost:3000/Classe/add-classe";
  httpOptions = { headers: new HttpHeaders({
  'Content-Type': 'application/json'})}
  addData(classe:Classe): Observable<Classe>{
  return this.http.post<Classe>(this. url1, classe, this.httpOptions);
}
}
