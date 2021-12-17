import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseApi = 'https://www.dnd5eapi.co/api/skills';
const classesApi = 'https://www.dnd5eapi.co/api/classes';
const cryptoApi = 'https://temp-dakota.web.app/cryptocurrency.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSkill() {
    return this.http.get(baseApi);
  }

  getClasses() {
    return this.http.get(classesApi);
  }

  getCrypto(){
    return this.http.get(cryptoApi);
  }

}
