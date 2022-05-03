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

  pasaje!: Pasaje
  precioTotal!: number

  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasaje = new Pasaje()
    this.precioTotal = 0
  }

  ngOnInit(): void {
  }

  public guardarPasaje() {
    if (!this.pasaje.dniPasajero || this.pasaje.categoriaPasajero.length == 0 || !this.pasaje.precioPasaje)
      alert("Debe rellenar todos los campos")
    else {
      this.pasaje.fechaCompra = new Date()
      this.pasaje.precioPasaje = this.calcularPrecioTotal()
      this.pasajeService.addPasaje(this.pasaje)
      this.limpiar()
      this.router.navigate(['/punto3'])
    }
  }

  public limpiar() {
    this.pasaje = new Pasaje()
  }

  calcularPrecioTotal(): number {
    var porcentaje = 0
    if (this.pasaje.categoriaPasajero == "m") porcentaje = 0.25
    else if (this.pasaje.categoriaPasajero == "j") porcentaje = 0.5
    return this.pasaje.precioPasaje - (this.pasaje.precioPasaje * porcentaje)
  }
  public cambiarValor() {
    this.precioTotal = this.calcularPrecioTotal()
  }

  public checkPrecioYCategoria(): boolean {
    if (this.pasaje.precioPasaje && this.pasaje.categoriaPasajero.length > 0) return true
    return false;
  }


}