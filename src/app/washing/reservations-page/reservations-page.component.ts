import { Component, OnInit } from '@angular/core';

import { ReservationService } from '../../shared/services/reservation.service';
import { WashingReservation } from '../../shared/models/washing-reservation';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css',
})
export class ReservationsPageComponent implements OnInit {
  dataSource: WashingReservation[] = [];
  displayedColumns: string[] = [
    'washingName',
    'washingValue',
    'washingDuration',
    'date',
    'paymentMethod',
  ];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.listReservations().subscribe({
      next: (reservations) => {
        this.dataSource = reservations;
        console.log(this.dataSource);
      },
    });
  }
}
