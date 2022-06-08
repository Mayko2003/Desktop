import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { PasajeComponent } from './components/pasaje/pasaje.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { DivisaFormComponent } from './components/divisa-form/divisa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    DivisaComponent,
    PasajeComponent,
    HomeComponent,
    HeaderComponent,
    LibroFormComponent,
    DivisaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
