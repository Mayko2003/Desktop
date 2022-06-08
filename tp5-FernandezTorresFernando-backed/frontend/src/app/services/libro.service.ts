import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseURL: string = "http://localhost:3000/api/libro";
  constructor() { }
}
