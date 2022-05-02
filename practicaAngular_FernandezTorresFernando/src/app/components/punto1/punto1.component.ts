import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  
  noticias!: Array<Noticia>
  noticia!: Noticia
  indice: number = 0
  constructor() { 
    this.noticias = [
      {titulo: "Manchester City derrotó al Real Madrid", noticia: "Semifinales de la Champions League, el Manchester City le ganó 4 a 3 al Real Madrid", img: "noticia1.jpg"},
      {titulo: "Bayern Munich venció al Borussia Dortmund y grita campeón de la Bundesliga", noticia: "Bayern Munich venció al Borussia Dortmund y grita campeón", img: "noticia2.jpg"},
      {titulo: "River no pudo con Atlético Tucumán", noticia: "El Millonario y el Decano igualaron 1-1, por la 12° fecha de la Copa LPF", img: "noticia3.jpg"},
    ]
    this.noticia = this.noticias[0]
  }

  anterior(){
    this.indice--
    if(this.indice < 0) this.indice = this.noticias.length - 1
    this.noticia = this.noticias[this.indice]
    console.log(this.indice)
  }

  siguiente(){
    this.indice++
    this.indice%=this.noticias.length
    this.noticia = this.noticias[this.indice]
    console.log(this.indice)
  }

  ngOnInit(): void {
  }

}
