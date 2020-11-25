import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
