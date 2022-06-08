import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  
  private baseURL = 'http://localhost:3000/api/transacciones'

  constructor(private http: HttpClient) { }

  getTransacciones():Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(this.baseURL, options)
  }

  filtrarTransacciones(origen: string, destino: string):Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const urlQuery = '/filter?origen=' + origen + '&destino=' + destino
    return this.http.get(this.baseURL + urlQuery, options)
  }

  createTransaccion(transaccion: Transaccion):Observable<any> {
    const options = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    const body = JSON.stringify(transaccion)
    return this.http.post(this.baseURL + '/create', body, options)
  }
}
