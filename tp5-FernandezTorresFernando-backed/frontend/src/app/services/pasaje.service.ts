import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  private baseURL = "http://localhost:3000/api/pasajes"

  constructor(private http:HttpClient) { }

  getPasajes():Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.get(this.baseURL, options)
  }

  filterPasajes(categoria:string):Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    const queryURL = '/filter?categoria=' + categoria 
    return this.http.get(this.baseURL + queryURL, options)
  }

  deletePasaje(id: string):Observable<any> {
    const options = {
      method: "DELETE",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.delete(this.baseURL + '/delete/' + id,options)
  }

  createPasaje(pasaje: Pasaje): Observable<any> {
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = {
      precioPasaje: pasaje.precioPasaje,
      categoriaPasaje: pasaje.categoriaPasaje,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero._id
    }
    return this.http.post(this.baseURL + '/create', body, options)
  }

  updatePasaje(pasaje: Pasaje): Observable<any> {
    const options = {
      method: "PUT",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = {
      _id: pasaje._id,
      precioPasaje: pasaje.precioPasaje,
      categoriaPasaje: pasaje.categoriaPasaje,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero._id
    }
    return this.http.put(this.baseURL + '/update/' + pasaje._id, body, options)
  }

  getPasaje(id: string): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    return this.http.get(this.baseURL + '/' + id, options)
  }

}
