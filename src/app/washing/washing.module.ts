import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { ReservationFormComponent } from './reservation-form/reservation-form.component';


@NgModule({
  declarations: [
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    ReservationFormComponent
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class WashingModule { }
