import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica'
  usuarios!: Array<Usuario>
  pageActual = 0
  pageSize = 2
  orden : string = "-";

  constructor(){
    this.usuarios = new Array<Usuario>()
    var nuevo = new Usuario()
    nuevo.nombreUsuario = "admin"
    nuevo.nombre = "AdmINisTRADor"
    nuevo.apellido = "AdminisTRADOR"
    nuevo.email = "admin@admin.com"
    nuevo.password = "admin"
    nuevo.estado = true
    this.usuarios.push(nuevo)

    var nuevo = new Usuario()
    nuevo.nombreUsuario = "maykox34f"
    nuevo.nombre = "MayKO"
    nuevo.apellido = "Fernandez"
    nuevo.email = "correo@correo.com"
    nuevo.password = "123456"
    nuevo.estado = false
    this.usuarios.push(nuevo)

    var nuevo = new Usuario()
    nuevo.nombreUsuario = "juanfer"
    nuevo.nombre = "Juan FernaNDO"
    nuevo.apellido = "QuiNTErO"
    nuevo.email = "quintero123@gmail.com"
    nuevo.password = "123456"
    nuevo.estado = false
    this.usuarios.push(nuevo)

    var nuevo = new Usuario()
    nuevo.nombreUsuario = "JAlvarez"
    nuevo.nombre = "JuLiaN"
    nuevo.apellido = "Alvarez"
    nuevo.email = "river@alvarez.com"
    nuevo.password = "123456"
    nuevo.estado = true
    this.usuarios.push(nuevo)

    var nuevo = new Usuario()
    nuevo.nombreUsuario = "proyect omega"
    nuevo.nombre = "Fernando"
    nuevo.apellido = "GUTierrez"
    nuevo.email = "proyect@fi.unju.edu.ar"
    nuevo.password = "123456789"
    nuevo.estado = true
    this.usuarios.push(nuevo)
  }

  cambiarPage(op: string){
    if(op == "next" && this.pageActual < this.usuarios.length/this.pageSize) this.pageActual+= 2
    if(op == "prev" && this.pageActual > 1) this.pageActual-= 2
  }
  cambiarFlecha(){
    if(this.orden == "↑") this.orden = "↓"
    else if(this.orden == "↓") this.orden = "-"
    else this.orden = "↑"
  }
}
