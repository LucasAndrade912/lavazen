import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { WashingReservation } from '../../shared/models/washing-reservation';
import { ReservationService } from '../../shared/services/reservation.service';
import { SweertalertService } from '../../shared/services/sweertalert.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ReservationFormComponent {
  constructor(
    private reservationService: ReservationService,
    private sweetAlertService: SweertalertService
  ) {}

  paymentMethodOptions = [
    { viewValue: 'PIX', value: 'pix' },
    { viewValue: 'Cartão de crédito', value: 'credit_card' },
    { viewValue: 'Dinheiro', value: 'cash' },
  ];

  name = '';
  carModel = '';
  phone = '';
  date: Date | null = null;
  paymentMethod = '';
  observations = '';

  onCreate() {
    const reservation = new WashingReservation(
      this.carModel,
      this.paymentMethod,
      this.observations,
      this.date
    );

    this.reservationService.createReservation(reservation).subscribe({
      next: () => {
        this.sweetAlertService.sucess(
          'Cadastro realizado!',
          'Reserva de lavagem cadastrada com sucesso.'
        );

        this.name = '';
        this.carModel = '';
        this.phone = '';
        this.date = null;
        this.paymentMethod = '';
        this.observations = '';
      },
    });
  }
}
