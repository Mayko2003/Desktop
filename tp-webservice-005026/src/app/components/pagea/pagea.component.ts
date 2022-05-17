import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { MoviesdetailsService } from 'src/app/services/moviesdetails.service';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {

  peliculas: Pelicula[] = []
  seachesId: string[] = [
    "tt12412888", // sonic 2
    "tt1877830",//the batman
    "tt9419884", //doctor strange
    "tt8097030", //red
    "tt5834426", //moonfall
    "tt5108870" // morbius
  ]

  constructor(private moviesService:MoviesdetailsService) { 
    var indice = 0
    let timerId = setInterval(() => {
        this.moviesService.detail(this.seachesId[indice]).subscribe(
            (data) => {
                var nueva = new Pelicula(
                    data.id,
                    data.title,
                    data.image,
                    data.description.substring(0,200) + "...",
                    data.genres,
                    data.rating,
                    data.runtime
                )
                this.peliculas.push(nueva)
            }
        )
        indice++
        if(indice >= this.seachesId.length) clearInterval(timerId)
    }, 250);

  }

  ngOnInit(): void {
  }

}
