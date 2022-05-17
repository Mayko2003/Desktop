import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
        'X-RapidAPI-Key': 'd6ba5d39a4msh29c7b0fb1fd1f99p19e701jsn3e67b484b7d4',
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com',
      })
    }
    return this._http.get('https://movie-details1.p.rapidapi.com/imdb_api/movie',options);
  }
}
