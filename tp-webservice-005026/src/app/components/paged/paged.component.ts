import { Component, OnInit } from '@angular/core';
import { QrGeneratorService } from 'src/app/services/qr-generator.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-paged',
  templateUrl: './paged.component.html',
  styleUrls: ['./paged.component.css']
})
export class PagedComponent implements OnInit {

  qrImg!: SafeHtml;
  submited: boolean = false;
  urlInput: string = ""
  constructor(private sanitizer: DomSanitizer,private qrGeneratorService: QrGeneratorService) { }

  ngOnInit(): void {
    
  }

  generar(){
    this.qrGeneratorService.generate(this.urlInput).subscribe(
      (data: any) => {
        this.qrImg = this.sanitizer.bypassSecurityTrustHtml(data.result);
      }
    )
    this.submited = true
  }

}
