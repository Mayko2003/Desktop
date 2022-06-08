import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  private libros: Array<Libro> = []
  actual!: Libro
  index: number = 0

  constructor(private libroService: LibroService) { 
    this.actual = new Libro()
    //use service to get data from backend server
    this.libroService.getLibrosDestacados().subscribe(
      (data: Array<Libro>) => {
        console.log(data)
        Object.assign(this.libros, data);
        Object.assign(this.actual, data[0]);
      }
    )
  }

  ngOnInit(): void {
  }

  siguiente(){
    this.index++
    if(this.index >= this.libros.length){
      this.index = 0
    }
    this.actual = this.libros[this.index]
  }

  anterior(){
    this.index--
    if(this.index < 0){
      this.index = this.libros.length - 1
    }
    this.actual = this.libros[this.index]
  }

}
