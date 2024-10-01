import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { authInterceptor } from '../shared/interceptors/auth.interceptor';
import { TimeFomartPipe } from '../shared/pipes/time-fomart.pipe';
import { HourRangeFormatPipe } from '../shared/pipes/hour-range-format.pipe';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { WashingTypeCardComponent } from './components/washing-type-card/washing-type-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReservationsPageComponent } from './pages/reservations-page/reservations-page.component';

@NgModule({
  declarations: [
    ReservationFormComponent,
    HomePageComponent,
    ReservationsPageComponent,
    WashingTypeCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TimeFomartPipe,
    HourRangeFormatPipe,
  ],
  exports: [HomePageComponent, ReservationFormComponent],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
})
export class WashingModule {}
