import { Component, OnInit } from '@angular/core';
import { Translate } from 'src/app/models/translate';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';

@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent implements OnInit {

  translate!: Translate
  constructor(private googleTranslateService: GoogleTranslateService) {
    this.translate = new Translate()
    this.translate.sourceLang = ""
    this.translate.targetLang = ""
    this.translate.txtTraducido = ""
    this.translate.txtTraducir = ""
  }

  ngOnInit(): void {
  }

  traducir() {
    this.googleTranslateService.translate(this.translate.txtTraducir, this.translate.sourceLang, this.translate.targetLang).subscribe(
      (data) => {
        this.translate.txtTraducido = data.data.translations[0].translatedText
        alert(this.translate.txtTraducido)
      }
    )
  }

}
