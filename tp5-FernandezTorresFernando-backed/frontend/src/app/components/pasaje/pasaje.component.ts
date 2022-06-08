import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {

  pasajes: Array<Pasaje> = []
  categoriaFiltrar: string = ""


  constructor(private pasajeService : PasajeService, private router: Router) {
    pasajeService.getPasajes().subscribe(
      (data: Array<Pasaje> ) => {
        Object.assign(this.pasajes, data)
      }
    )
  }

  

  ngOnInit(): void {
  }
  
  
  limpiar(){
    this.categoriaFiltrar = ""
    //recarga la pagina asi se actualiza el table
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/pasajes'])
  }

  filtrar(){
    this.pasajeService.filterPasajes(this.categoriaFiltrar).subscribe(
      (data: Array<Pasaje>) => {
        this.pasajes = []
        Object.assign(this.pasajes, data)
      }
    )
  }

  edit(pasaje: Pasaje){
    this.router.navigate(['/pasajes/', pasaje._id])
  }

  delete(pasaje: any){
    this.pasajeService.deletePasaje(pasaje._id).subscribe()
    //recarga la pagina asi se actualiza el table
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/pasajes'])

  }

}
