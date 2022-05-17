import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

  constructor(private _http: HttpClient) {}

  translate(text:string,source:string, target:string):Observable<any> {
    const encodeParams = new URLSearchParams();
    encodeParams.append('q',text)
    encodeParams.append('source',source)
    encodeParams.append('target',target)
    
    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd6ba5d39a4msh29c7b0fb1fd1f99p19e701jsn3e67b484b7d4'
      }),
      data: encodeParams
    }
    return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2',options)
  }
}
