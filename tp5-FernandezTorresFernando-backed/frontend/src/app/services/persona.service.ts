import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL = 'http://localhost:3000/api/personas'

  constructor(private http: HttpClient) { }


  getPersonas():Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(this.baseURL, options)
  }
}
