import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesdetailsService {

  constructor(private _http: HttpClient) { }

  public detail(id:string): Observable<any>{
    const options = {
      method: 'GET',
      params: {
        id: id,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': environment.apiKeyRapidApi,
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com',
      })
    }
    return this._http.get('https://movie-details1.p.rapidapi.com/imdb_api/movie',options);
  }
}
