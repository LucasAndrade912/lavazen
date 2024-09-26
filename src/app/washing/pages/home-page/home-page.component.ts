import { Component } from '@angular/core';

import { ReservationService } from '../../../shared/services/reservation.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';
import { ReservationData } from '../../components/reservation-form/interfaces';
import { Reservation } from '../../../shared/models/reservation';

interface WashingCard {
  id: string;
  value: string;
  title: string;
  price: number;
  duration: number;
}

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

  washingTypesCards: WashingCard[] = [
    {
      id: 'card1',
      value: '1',
      title: 'Lavagem simples',
      price: 50,
      duration: 45,
    },
    {
      id: 'card2',
      value: '2',
      title: 'Lavagem completa',
      price: 120,
      duration: 120,
    },
    {
      id: 'card3',
      value: '3',
      title: 'Lavagem a seco',
      price: 70,
      duration: 60,
    },
    {
      id: 'card4',
      value: '4',
      title: 'Lavagem com cera',
      price: 150,
      duration: 120,
    },
  ];

  handleScheduleReservation(data: ReservationData) {
    const reservation = new Reservation(
      '1',
      this.washingId,
      data.carModel,
      data.paymentMethod,
      data.observations,
      new Date(data.date)
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
