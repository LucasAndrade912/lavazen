import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './washing/pages/home-page/home-page.component';
import { ReservationsPageComponent } from './washing/pages/reservations-page/reservations-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'reservations', component: ReservationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
