import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css',
})
export class ReservationsPageComponent {
  dataSource = [];
  displayedColumns: string[] = [
    'washingName',
    'washingValue',
    'washingDuration',
    'date',
    'paymentMethod',
  ];
}
