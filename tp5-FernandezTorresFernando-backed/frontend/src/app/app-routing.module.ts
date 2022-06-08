import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisaComponent } from './components/divisa/divisa.component';
import { HomeComponent } from './components/home/home.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { LibroComponent } from './components/libro/libro.component';
import { PasajeComponent } from './components/pasaje/pasaje.component';

const routes: Routes = [
  { path: 'transacciones', component: DivisaComponent },
  { path: 'libros/crear', component: LibroFormComponent},
  { path: 'pasajes', component: PasajeComponent },
  { path: 'libros', component: LibroComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
