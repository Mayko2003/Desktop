import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  submited:boolean = false;
  nombre:string = "";
  books: Book[] = [];

  constructor(private apiService:ApiService, private router:Router) { }


  search(text:string){
    this.apiService.getBooks(text).subscribe(
      (data:any[])=>{
        data.forEach((book:any) => {
          let nuevo = new Book()
          nuevo.id = book.book_id
          nuevo.title = book.name
          nuevo.img = book.cover
          nuevo.autores = book.authors
          this.books.push(nuevo)
        });
      }
    )
    this.submited = true
  }

  goTo(id:number){
    this.router.navigate(['/view', id])
  }

  ngOnInit(): void {
  }

}
