import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService{

  constructor(
    private http: HttpClient,
  ) {}

  getCommunes() {
    return this.http.get('https://geo.api.gouv.fr/communes?codePostal=01500');
  }
}
