import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  providers: [provideNativeDateAdapter()]
})
export class ReservationFormComponent {
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
    console.log({
      name: this.name,
      carModel: this.carModel,
      phone: this.phone,
      date: this.date?.toLocaleDateString(),
      paymentMethod: this.paymentMethod,
      observations: this.observations
    })
  }
}
