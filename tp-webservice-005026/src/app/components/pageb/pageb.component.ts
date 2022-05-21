import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/models/divisa';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {

  divisa!: Divisa
  submited = false

  divisaCodes = [
    "usd", "eur", "gbp", "jpy", "ars"
  ]
  content: any[] = [
    { code: "usd", amounts:[] },
    { code: "eur", amounts:[] },
    { code: "gbp", amounts:[] },
    { code: "jpy", amounts:[] },
    { code: "ars", amounts:[] }
  ]

  constructor(private currencyConverterService: CurrencyConverterService) {
    this.divisa = new Divisa()

    for (let i = 0; i < this.divisaCodes.length; i++) {
      for (let j = 0; j < this.divisaCodes.length; j++) {

        //divisas convertidas
        this.currencyConverterService.convertir(this.divisaCodes[i], this.divisaCodes[j], 1).subscribe(
          data => this.content[i].amounts.push(data.new_amount))
      }
    }
  }

  ngOnInit(): void {
  }

  convertir(have: string, want: string, amount: number) {
    this.currencyConverterService.convertir(have, want, amount).subscribe(
      (data: any) => {
        this.divisa.amount = amount
        this.divisa.have = have
        this.divisa.want = want
        this.divisa.conversion = data.new_amount
        this.submited = true
      }
    )
  }

}
