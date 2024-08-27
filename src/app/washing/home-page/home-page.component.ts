import { Component } from '@angular/core';

import { ReservationService } from '../../shared/services/reservation.service';
import { SweertalertService } from '../../shared/services/sweertalert.service';
import { Reservation } from '../../shared/models/reservation';
import { FormData } from '../reservation-form/form-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(
    private reservationService: ReservationService,
    private sweetAlertService: SweertalertService
  ) {}

  washingId = '';

  handleCreateNewReservation(data: FormData) {
    if (
      !this.washingId
      || !data.carModel
      || !data.date 
      || !data.paymentMethod 
      || !data.name
      || !data.phone
    ) {
      this.sweetAlertService.error(
        'Preencha todos os campos',
        'Preencha todos os campos para seguir com o cadastro.'
      )
      return;
    }

    const reservation = new Reservation(
      '1',
      this.washingId,
      data.carModel,
      data.paymentMethod,
      data.observations,
      data.date ?? new Date()
    );

    this.reservationService.createReservation(reservation).subscribe({
      next: () => {
        this.sweetAlertService.sucess(
          'Cadastro realizado!',
          'Reserva de lavagem cadastrada com sucesso.'
        );

        this.washingId = '';
      },
    });
  }
}
