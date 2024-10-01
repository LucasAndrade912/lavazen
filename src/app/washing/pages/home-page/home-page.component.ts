import { Component, OnInit } from '@angular/core';

import { Reservation } from '../../../shared/models/reservation';
import { ReservationService } from '../../../shared/services/reservation.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';
import { WashingService } from '../../../shared/services/washing.service';
import { ReservationData } from '../../components/reservation-form/interfaces';
import { BookingService } from '../../../shared/services/booking.service';

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
    private bookingService: BookingService,
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

  selectedDate = '';
  washingId = '';
  washingTypesCards: WashingCard[] = [];
  washingDuration = 0;
  availableTimes: string[] = [];

  handleDateSelection(date: string) {
    this.selectedDate = date;

    if (this.washingId && this.selectedDate) {
      this.bookingService
        .listAvailableTimes(Number(this.washingId), this.selectedDate)
        .subscribe({
          next: (times) => {
            this.availableTimes = times;
          },
        });
    }
  }

  handleWashingIdChange(id: string) {
    this.washingId = id;

    this.washingDuration = this.washingTypesCards[Number(id) - 1].duration;

    if (this.washingId && this.selectedDate) {
      this.bookingService
        .listAvailableTimes(Number(this.washingId), this.selectedDate)
        .subscribe({
          next: (times) => {
            this.availableTimes = times;
          },
        });
    }
  }

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
