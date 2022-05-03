import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasajes!: Array<Pasaje>
  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasajes = new Array<Pasaje>()
    this.pasajes = this.pasajeService.getPasajes()
  }


  editarPasaje(pasaje: Pasaje) {
    this.router.navigate(['/punto3', pasaje.idPasaje])
  }

  eliminarPasaje(pasaje: Pasaje) {
    this.pasajeService.deletePasaje(pasaje.idPasaje)
  }

  desactivarPasaje(id: number): boolean {
    var disabled = false
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == id) disabled = true
      else disabled = false
    })
    return disabled
  }
  resumirPasajes(): any {
    var resumen = new Array<any>()
    resumen.push(this.pasajeService.filtrarPorCategoria("m"))
    resumen.push(this.pasajeService.filtrarPorCategoria("a"))
    resumen.push(this.pasajeService.filtrarPorCategoria("j"))
    return resumen
  }


  ngOnInit(): void {

  }

}
