import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import { PagedComponent } from './components/paged/paged.component';

const routes: Routes = [
  { path: 'pageb', component: PagebComponent },
  { path: 'pagec', component: PagecComponent},
  { path: 'paged', component: PagedComponent},
  { path: 'page1', component: Page1Component},
  { path: '**', component: PageaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
