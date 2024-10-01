import { Component, OnInit } from '@angular/core';

import { Reservation } from '../../../shared/models/reservation';
import { ReservationService } from '../../../shared/services/reservation.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';
import { WashingService } from '../../../shared/services/washing.service';
import { ReservationData } from '../../components/reservation-form/interfaces';

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
export class HomePageComponent implements OnInit {
  constructor(
    private reservationService: ReservationService,
    private sweetAlertService: SweertalertService,
    private washingService: WashingService
  ) {}

  ngOnInit() {
    this.washingService.list().subscribe({
      next: (washings) => {
        this.washingTypesCards = washings.map((washing) => ({
          id: `card${washing.id}`,
          value: `${washing.id}`,
          title: washing.name,
          price: washing.price,
          duration: washing.duration,
        }));
      },
    });
  }

  washingId = '';
  washingTypesCards: WashingCard[] = [];

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
