import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  juego!: Juego
  palabrasJuego: Array<string> = [
    "ABEJA",
    "BALLENA",
    "ELEFANTE",
    "GATO",
    "LEON",
    "MARIPOSA",
    "MONO",
    "PERRO",
    "TORTUGA",
    "TUCAN",
  ]
  letras: any = []

  constructor() {
    //crear instancia del juego
    this.juego = new Juego()

    //inicializar sus atributos
    this.juego.estadoImg = "ahorcadito/0.jpg"
    this.juego.intentos = 6

    var indiceRandom = (Math.random() * this.palabrasJuego.length) | 0
    this.juego.palabra = this.palabrasJuego[indiceRandom]

    this.juego.estadoJuego = new Array<string>()
    for (const letra of this.juego.palabra) {
      this.juego.estadoJuego.push("_")

    }
    this.juego.fin = false

    //inicializar las letras disponibles
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (const letra of letras) {
      this.letras.push(
        { letra: letra, estado: true }
      )
    }
  }

  intentarLetra(letra: any) {
    // se cambia el estado de la letra a falso asi no se vuelve a utilizar
    letra.estado = false

    // si quedan intentos y el juego no termino se juega
    if (this.juego.intentos && !this.juego.fin) {
      // si la letra se encuenta en la palabra se cambia el estado del juego, sino se resta 1 intento
      if (this.juego.palabra.includes(letra.letra)) {
        // se actualiza el estado del juego
        for (let i = 0; i < this.juego.palabra.length; i++) {
          if (this.juego.palabra[i] == letra.letra) {
            this.juego.estadoJuego[i] = letra.letra
          }
        }
        // se evalua si el juego termino
        if (!this.juego.estadoJuego.includes("_")) {
          this.juego.fin = true
        }
      } else {
        this.juego.intentos--
        this.juego.estadoImg = "ahorcadito/" + (6 - this.juego.intentos) + ".jpg"
      }
      // si no quedan intentos o el juego termino se muesta el modal
      if (!this.juego.intentos || this.juego.fin) {
        document.getElementById("btnResultado")?.click();
      }
    }
  }

  definirClaseLetra(letra: boolean): string {
    if (letra) return "btn btn-secondary m-1 col-2 col-lg-1"
    return "btn btn-danger m-1 col-2 col-lg-1"
  }

  jugarDeNuevo() {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
