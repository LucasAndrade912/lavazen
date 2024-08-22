import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './washing/home-page/home-page.component';
import { ReservationsPageComponent } from './washing/reservations-page/reservations-page.component';
import { TypeOfWashingComponent } from './washing/type-of-washing/type-of-washing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'reservations', component: ReservationsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
