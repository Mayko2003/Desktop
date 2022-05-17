import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/models/divisa';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {

  divisa!:Divisa
  submited = false
  constructor(private currencyConverterService:CurrencyConverterService) { 
    this.divisa = new Divisa()
  }

  ngOnInit(): void {
  }

  convertir(have:string,want:string,amount:number) {
    this.currencyConverterService.convertir(have,want,amount).subscribe(
      (data:any) => {
        this.divisa.amount = amount
        this.divisa.have = have
        this.divisa.want = want
        this.divisa.conversion = data.new_amount
        this.submited = true
      }
    )
  }

}
