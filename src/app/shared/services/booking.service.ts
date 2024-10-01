import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Booking } from '../models/booking';

interface ResponseCreateBooking {
  id: number;
  date: string;
  startHour: string;
  carModel: string;
  paymentMethod: string;
  washingName: string;
  washingPrice: number;
  washingDuration: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  listAvailableTimes(washingId: number, date: string) {
    return this.http.get<string[]>(`${this.baseUrl}/bookings/availabletimes`, {
      params: { washingId, date },
    });
  }

  create(booking: Booking) {
    return this.http.post<ResponseCreateBooking>(`${this.baseUrl}/bookings`, {
      washingId: booking.washingId,
      carPlate: booking.carPlate,
      carModel: booking.carModel,
      paymentMethod: booking.paymentMethod,
      date: booking.date,
      startHour: booking.startHour,
    });
  }
}
