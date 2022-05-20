import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private _http:HttpClient) { }



  public convertir(have:string, want:string, amount:number) : Observable<any> {
    const options = {
      method : "GET",
      params: {
        have: have,
        want: want,
        amount: amount
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': environment.apiKeyRapidApi,
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
      })
    }
    return this._http.get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',options);
  }


}
