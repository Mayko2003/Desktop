import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisaComponent } from './components/divisa/divisa.component';
import { LibroComponent } from './components/libro/libro.component';
import { PasajeComponent } from './components/pasaje/pasaje.component';

const routes: Routes = [
  { path: 'divisa', component: DivisaComponent },
  { path: 'pasaje', component: PasajeComponent },
  {path: '**', component: LibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
