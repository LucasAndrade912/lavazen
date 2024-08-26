import { Component, Output, EventEmitter } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormData } from './form-data';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ReservationFormComponent {
  formData: FormData = {
    name: '',
    carModel: '',
    phone: '',
    date: null,
    paymentMethod: '',
    observations: '',
  };

  paymentMethodOptions = [
    { viewValue: 'PIX', value: 'pix' },
    { viewValue: 'Cartão de crédito', value: 'credit_card' },
    { viewValue: 'Dinheiro', value: 'cash' },
  ];

  @Output() createNewReservationEvent = new EventEmitter<FormData>();

  createNewReservation() {
    this.createNewReservationEvent.emit(this.formData);
    this.formData = {
      name: '',
      carModel: '',
      phone: '',
      date: null,
      paymentMethod: '',
      observations: '',
    };
  }
}
