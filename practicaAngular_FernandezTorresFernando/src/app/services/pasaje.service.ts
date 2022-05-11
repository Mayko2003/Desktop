import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  pasajes!: Array<Pasaje>
  constructor() {
    this.pasajes = new Array<Pasaje>()
  }

  getPasajes(): Array<Pasaje> {
    return this.pasajes
  }
  getIdDisponible(): number {
    if (this.pasajes.length === 0) return 0;
    else return this.pasajes[this.pasajes.length - 1].idPasaje + 1;
  }

  addPasaje(pasaje: Pasaje): void {
    pasaje.idPasaje = this.getIdDisponible()
    this.pasajes.push(pasaje)
  }

  getPasaje(id: number): Pasaje {
    return this.pasajes[id]
  }

  updatePasaje(pasaje: Pasaje): void {
    this.pasajes[pasaje.idPasaje] = pasaje
  }

  deletePasaje(id: number): void {
    this.pasajes.forEach((pasaje, index) => {
      if (pasaje.idPasaje === id) {
        this.pasajes.splice(index, 1)
      }
    })
  }

  filtrarPorCategoria(categoria: string): any {
    let cant = 0
    let total = 0
    this.pasajes.forEach(pasaje => {
      if (pasaje.categoriaPasajero === categoria) {
        cant++
        total += pasaje.precioPasaje
      }
    })
    return { categoria, cant, total }
  }
}
