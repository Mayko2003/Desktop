import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { HomeComponent } from './components/home/home.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
import { FormsModule } from '@angular/forms';
import { MostrarCategoriaPipe } from './pipes/mostrar-categoria.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    HomeComponent,
    Punto3FormComponent,
    MostrarCategoriaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
