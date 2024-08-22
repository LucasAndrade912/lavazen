import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { TypeOfWashingComponent } from './type-of-washing/type-of-washing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';


@NgModule({
  declarations: [
    ReservationFormComponent,
    TypeOfWashingComponent,
    HomePageComponent,
    ReservationsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    ReservationFormComponent,
    TypeOfWashingComponent
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class WashingModule { }
