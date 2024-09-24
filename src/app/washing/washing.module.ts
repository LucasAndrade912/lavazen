import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
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
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [HomePageComponent, ReservationFormComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class WashingModule {}
