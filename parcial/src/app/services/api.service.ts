import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getBooks(text:string):Observable<any>{
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': '7f8abb8021msh4f7036ef531c2e6p1b28f9jsn49c6fdee0f8b'
      }
    }
    return this.http.get("https://hapi-books.p.rapidapi.com/search/"+text,options)
  }

  getBookById(id:string): Observable<any>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': '7f8abb8021msh4f7036ef531c2e6p1b28f9jsn49c6fdee0f8b'
      }
    }
    return this.http.get("https://hapi-books.p.rapidapi.com/book/"+id,options)
  }
}
