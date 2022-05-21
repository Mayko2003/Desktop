import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AztroService {

  constructor(private _http:HttpClient) { }

  obtenerHoroscopo(sign:string,day:string): Observable<any>{
    const options = {
      params: {sign: sign, day: day},
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd6ba5d39a4msh29c7b0fb1fd1f99p19e701jsn3e67b484b7d4'
      }),
    }
    //const body = new HttpParams().set('sign', sign).set('day', day);
    return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com",null,options)
  }
}
