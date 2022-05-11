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

  //angular-datatable config
  dtOptions: object = {
    data: this.pasajes,
    language: {
      search:"Buscar",
      zeroRecords: "No hay pasajes cargados",
      info: "Mostrando _START_ a _END_ de _TOTAL_ pasajes",
      paginate:{
        first : "Primero",
        last: "Ultimo",
        next: "Siguiente",
        previous: "Anterior"
      },
      lengthMenu: "Mostrar _MENU_ pasajes"
    },
    lenghtChange: true,
    pageLength: 5,
    lengthMenu: [5, 10, 15, 20, 25],
    stateSave: true,
  }

  // constructor
  // inyectamos el servicio, router y activatedRoute
  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasajes = new Array<Pasaje>()
    this.pasajes = this.pasajeService.getPasajes()
  }


  editarPasaje(pasaje: Pasaje) {
    this.router.navigate(['/punto3', pasaje.idPasaje])
  }

  eliminarPasaje(pasaje: Pasaje) {
    this.pasajeService.deletePasaje(pasaje.idPasaje)
    //recarga la pagina asi se actualiza el datatable
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
  }

  // desactiva las operaciones si el que se esta editando es el mismo que se esta operando
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
