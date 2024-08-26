import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private endpoint = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) {}

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.endpoint, {
      userId: '1',
      washingId: reservation.washingId,
      date: reservation.date.toLocaleDateString(),
      carModel: reservation.carModel,
      paymentMethod: reservation.paymentMethod,
      observations: reservation.observations,
    });
  }

  listReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.endpoint}?_embed=washing&_embed=user`);
  }
}
