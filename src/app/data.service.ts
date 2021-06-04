import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getPeople(): Observable<any>{
    return this.httpClient.get('https://swapi.dev/api/people/')
};

getPlanet(): Observable<any>{
  return this.httpClient.get('https://swapi.dev/api/planets/')
};

  public getVehicle(){
    return this.httpClient.get('https://swapi.dev/api/vehicles/');
  }

  getOnePerson(url): Observable<any> {
    return this.httpClient.get(url)
   }
}
