import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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
        'X-RapidAPI-Key': environment.apiKeyRapidApi
      })
    }

    return this._http.get('https://qr-generator-api.p.rapidapi.com/api/qrcode/generate', options);
  }
}
