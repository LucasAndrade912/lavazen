import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Booking } from '../models/booking';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';

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
  private collectionName = 'bookings';
  private baseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) {}

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

  saveInFirestore(data: ResponseCreateBooking) {
    return from(this.firestore.collection(this.collectionName).add({ ...data }));
  }

  listAll() {
    return this.firestore.collection<Booking>(this.collectionName).valueChanges();
  }
}
