import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

const routes: Routes = [
  {path: "**", component: HoroscopoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
