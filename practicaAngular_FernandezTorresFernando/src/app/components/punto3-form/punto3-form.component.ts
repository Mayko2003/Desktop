import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {

  // variables
  pasaje!: Pasaje
  precioTotal!: number
  action: string = "new"

  // constructor
  // inyectamos el servicio, router y activatedRoute
  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasaje = new Pasaje()
    this.precioTotal = 0
  }

  // iniciamos el componente
  ngOnInit(): void {
    // obtenemos el parametro id que viene por la url y detectamos si es un nuevo o uno existente
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == -1) {
        this.action = "new"
      } else {
        this.action = "edit"
        this.pasaje = this.pasajeService.getPasaje(params['id'])
        this.precioTotal = this.pasaje.precioPasaje
      }
    })
  }

  // METODOS

  public limpiarPasaje() {
    this.pasaje = new Pasaje()
  }

  public cancelarForm() {
    this.limpiarPasaje()
    //reinicia la pagina asi se actualiza el datatable
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/punto3', -1])
  }

  public guardarPasaje() {
    if (this.action == "new") {
      this.pasaje.fechaCompra = new Date()
      this.pasaje.precioPasaje = this.calcularPrecioTotal()
      this.pasajeService.addPasaje(this.pasaje)
    } else {
      this.pasajeService.updatePasaje(this.pasaje)
    }
    this.cancelarForm()
  }

  calcularPrecioTotal(): number {
    var porcentaje = 0
    if (this.pasaje.categoriaPasajero == "m") porcentaje = 0.25
    else if (this.pasaje.categoriaPasajero == "j") porcentaje = 0.5
    return this.pasaje.precioPasaje - (this.pasaje.precioPasaje * porcentaje)
  }

  // metodo actualizar el precio total
  public cambiarValor() {
    this.precioTotal = this.calcularPrecioTotal()
  }

}