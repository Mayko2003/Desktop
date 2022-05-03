import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasajes!: Array<Pasaje>

  constructor(private pasajeService: PasajeService, private router: Router) {
    this.pasajes = new Array<Pasaje>()
    this.pasajes = this.pasajeService.getPasajes()
  }

  agregarPasaje() {
    this.router.navigate(['/punto3-form', -1])
  }

  editarPasaje(pasaje: Pasaje) {
    this.router.navigate(['/punto3-form', pasaje.idPasaje])
  }

  eliminarPasaje(pasaje: Pasaje) {
    this.pasajeService.deletePasaje(pasaje.idPasaje)
  }

  resumirPasajes(): any{
    var resumen = new Array<any>()
    resumen.push(this.pasajeService.filtrarPorCategoria("m"))
    resumen.push(this.pasajeService.filtrarPorCategoria("a"))
    resumen.push(this.pasajeService.filtrarPorCategoria("j"))
    return resumen
  }

  ngOnInit(): void {
  }

}
