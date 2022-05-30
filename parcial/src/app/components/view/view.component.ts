import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  book!: Book

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.book = new Book()
    this.route.params.subscribe(params => {
      apiService.getBookById(params["id"]).subscribe(
        (data:any)=>{
          this.book.id = data.book_id
          this.book.title = data.name
          this.book.img = data.cover
          this.book.autores = data.authors
          this.book.rating = data.rating
          this.book.pages = data.pages
          this.book.published_date = data.published_date
          this.book.synopsis = data.synopsis
        }
      )
    })
  }

  ngOnInit(): void {
  }

}
