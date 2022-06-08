import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {

  libro!: Libro;

  constructor(private libroService: LibroService) {
    this.libro = new Libro();
    this.libro.destacado = false
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.libro)
    this.libroService.createLibro(this.libro).subscribe(
      (data:any) => console.log(data)
    )
  }

}
