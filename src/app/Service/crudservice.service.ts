import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  url = environment.api;

  constructor(private http:HttpClient ) { }

  //Les Méthodes
  Allapprenant(){
    return this.http.get(this.url+'allapprenant');
  }
}
