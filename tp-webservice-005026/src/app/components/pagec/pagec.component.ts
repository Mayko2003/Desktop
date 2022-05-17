import { Component, OnInit } from '@angular/core';
import { Translate } from 'src/app/models/translate';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent implements OnInit {

  text!:SafeHtml;
  content:string = "<button class='btn btn-danger'>Click me</button>";

  translate!: Translate
  constructor(private sanitized: DomSanitizer ,private googleTranslateService: GoogleTranslateService) {
    this.translate = new Translate()
    this.translate.sourceLang = ""
    this.translate.targetLang = ""
    this.translate.txtTraducido = ""
    this.translate.txtTraducir = ""
    this.text = this.sanitized.bypassSecurityTrustHtml(this.content);
  }

  ngOnInit(): void {
  }

  traducir() {
    this.googleTranslateService.translate(this.translate.txtTraducir, this.translate.sourceLang, this.translate.targetLang).subscribe(
      (data) => {
        this.translate.txtTraducido = data.data.translations[0].translatedText
      }
    )
  }

}
