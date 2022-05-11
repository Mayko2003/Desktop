import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { SortUsernamePipe } from './pipes/sort-username.pipe';
import { HidepasswordPipe } from './pipes/hidepassword.pipe';

registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    SortUsernamePipe,
    HidepasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
