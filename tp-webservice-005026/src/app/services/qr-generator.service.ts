import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrGeneratorService {

  constructor(private _http: HttpClient) { }


  generate(text:string): Observable<any> {

    const options = {
      method: 'GET',
      params: {
        text: text
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'qr-generator-api.p.rapidapi.com',
        'X-RapidAPI-Key': 'd6ba5d39a4msh29c7b0fb1fd1f99p19e701jsn3e67b484b7d4'
      })
    }

    return this._http.get('https://qr-generator-api.p.rapidapi.com/api/qrcode/generate', options);
  }
}
