import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {

  transacciones: Array<Transaccion> = []
  origen: string = ""
  destino: string = ""

  divisaCodes = [
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'ARS'
  ]


  constructor(private transaccionService: TransaccionService) {
    transaccionService.getTransacciones().subscribe(
      (data: Array<Transaccion>) => {
        Object.assign(this.transacciones, data)
        console.log(this.transacciones)
      }
    )
  }

  ngOnInit(): void {
  }

  limpiar(){
    this.origen = ""
    this.destino = ""
    window.location.reload()
  }

  filtrar(){
    this.transaccionService.filtrarTransacciones(this.origen,this.destino).subscribe(
      (data: Array<Transaccion>) => {
        this.transacciones = []
        Object.assign(this.transacciones, data)
        console.log(this.transacciones)
      }
    )
  }
}
