import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {

  conversion:number = -1

  constructor(private currencyConverter:CurrencyConverterService) { }

  ngOnInit(): void {
  }

  convertir(have:string,want:string,amount:number): string {
    this.currencyConverter.convertir(have,want,amount).subscribe(
      (data:any) => {
        this.conversion = data.new_amount
      }
    )
    return "";
  }

}
