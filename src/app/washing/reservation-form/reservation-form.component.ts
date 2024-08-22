import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { WashingReservation } from '../../shared/models/washing-reservation';
import { ReservationService } from '../../shared/services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  providers: [provideNativeDateAdapter()]
})
export class ReservationFormComponent {
  constructor(private reservationService: ReservationService) {}

  paymentMethodOptions = [
    { viewValue: 'PIX', value: 'pix' },
    { viewValue: 'Cartão de crédito', value: 'credit_card' },
    { viewValue: 'Dinheirp', value: 'cash' }
  ];

  name: string = 'Lucas';
  carModel: string = 'HB20';
  phone: string = '83 900000000';
  date: Date| null = null;
  paymentMethod: string = '';
  observations: string = '';

  onCreate() {
    const reservation = new WashingReservation(this.carModel, this.paymentMethod, this.observations, this.date);

    this.reservationService.createReservation(reservation).subscribe({
      next: console.log
    })
  }
}
