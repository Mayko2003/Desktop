import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-divisa-form',
  templateUrl: './divisa-form.component.html',
  styleUrls: ['./divisa-form.component.css']
})
export class DivisaFormComponent implements OnInit {

  transaccion!: Transaccion

  divisaCodes = [
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'ARS'
  ]

  submited: boolean = false

  constructor(private transaccionService: TransaccionService) {
    this.transaccion = new Transaccion()
  }

  ngOnInit(): void {
  }


  save() {
    this.transaccion.cantidadDestino = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion
    console.log(this.transaccion)
    this.transaccionService.createTransaccion(this.transaccion).subscribe()
    this.submited = true
  }

}
