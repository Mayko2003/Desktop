import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css']
})
export class PasajeFormComponent implements OnInit {

  pasaje!: Pasaje
  personas : Array<Persona> = []
  action: string = 'new'


  constructor(private router: Router, private route: ActivatedRoute, private pasajeService: PasajeService, private personaService: PersonaService) {

    this.pasaje = new Pasaje()
    this.pasaje.fechaCompra = new Date().toLocaleString()

    this.personaService.getPersonas().subscribe(
      (data: Array<Persona>) => {
        Object.assign(this.personas, data)
      }
    )
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        if(params['id'] == 'crear') this.action = 'new'
        else{
          //change option
          this.action = 'edit'
          // change data
          this.pasajeService.getPasaje(params['id']).subscribe(
            (data: Pasaje) => {
              Object.assign(this.pasaje, data)
            }
          )
        }
      }
    })
  }

  calcularTotal(){
    let descuento = 0
    if(this.pasaje.categoriaPasaje == "m") descuento = 0.25
    else if(this.pasaje.categoriaPasaje == "j") descuento = 0.5

    return this.pasaje.precioPasaje - (this.pasaje.precioPasaje * descuento)
  }

  save(){
    this.pasaje.precioPasaje = this.calcularTotal()
    console.log(this.pasaje)
    if(this.action == "new") this.pasajeService.createPasaje(this.pasaje).subscribe()
    else this.pasajeService.updatePasaje(this.pasaje).subscribe()
    this.router.navigate(['/pasajes'])
  }
}
