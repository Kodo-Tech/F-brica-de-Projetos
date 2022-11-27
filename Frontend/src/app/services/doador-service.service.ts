import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  constructor(private http: HttpClient) { }

  obterDoador(id?: number, email?:string) {
    if(id) {
      return this.http.get(`${environment.urlAPI}/donors?id=${id}`);
    }
    if(email) {
      return this.http.get(`${environment.urlAPI}/donors?email=${email}`);
    }
    return this.http.get(`${environment.urlAPI}/donors`);
  } 
}
