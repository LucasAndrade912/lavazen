import { Component, Output, EventEmitter, Input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupReservationData, ReservationData } from './interfaces';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ReservationFormComponent {
  submitted = false;
  reservationForm: FormGroup;
  private readonly _currentDate = new Date();
  readonly minDate = new Date(this._currentDate.setDate(this._currentDate.getDate() + 1));
  readonly maxDate = new Date(
    this._currentDate.setMonth(this._currentDate.getMonth() + 1)
  );
  paymentMethodOptions = [
    { viewValue: 'PIX', value: 'PIX' },
    { viewValue: 'Cartão de crédito', value: 'CREDIT_CARD' },
    { viewValue: 'Dinheiro', value: 'CASH' },
  ];

  @Input() washingDuration = 0;
  @Input() availableTimes: string[] = [];
  @Output() scheduleReservation = new EventEmitter<ReservationData>();
  @Output() dateSelection = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.reservationForm = this.formBuilder.group({
      carPlate: new FormControl('', [Validators.required]),
      carModel: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      startHour: new FormControl('', []),
      paymentMethod: new FormControl('', [Validators.required]),
      observations: new FormControl('', [Validators.maxLength(255)]),
    });
  }

  handleScheduleReservation() {
    this.submitted = true;

    if (this.reservationForm.valid) {
      const form = this.reservationForm.value as FormGroupReservationData;

      this.scheduleReservation.emit({
        ...form,
        date: form.date.toLocaleDateString('pt-br'),
      });

      this.reservationForm.reset();
    }
  }

  handleDateSelect() {
    const formattedDate = (this.date?.value as Date).toLocaleDateString('pt-br');
    this.dateSelection.emit(formattedDate);
  }

  get carPlate() {
    return this.reservationForm.get('carPlate');
  }

  get carModel() {
    return this.reservationForm.get('carModel');
  }

  get date() {
    return this.reservationForm.get('date');
  }

  get startHour() {
    return this.reservationForm.get('startHour');
  }

  get paymentMethod() {
    return this.reservationForm.get('paymentMethod');
  }

  get observations() {
    return this.reservationForm.get('observations');
  }
}
