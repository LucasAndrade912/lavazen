import { Component, OnInit } from '@angular/core';

import { Reservation } from '../../../shared/models/reservation';
import { ReservationService } from '../../../shared/services/reservation.service';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css',
})
export class ReservationsPageComponent implements OnInit {
  dataSource: Reservation[] = [];
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
