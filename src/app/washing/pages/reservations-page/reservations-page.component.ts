import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../shared/models/booking';
import { BookingService } from '../../../shared/services/booking.service';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css',
})
export class ReservationsPageComponent implements OnInit {
  dataSource: Booking[] = [];
  displayedColumns: string[] = [
    'carModel',
    'washingName',
    'washingValue',
    'washingDuration',
    'date',
    'startHour',
    'paymentMethod',
  ];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.listAll().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
    });
  }
}
