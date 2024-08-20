import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WashingReservation } from '../models/washing-reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  createReservation(reservation: WashingReservation): Observable<WashingReservation> {
    return this.http.post<WashingReservation>(`${this.baseUrl}/reservations`, {
      id: "2",
      client: "1",
      washing: "1",
      date: reservation.date,
      carModel: reservation.carModel,
      paymentMethod: reservation.paymentMethod,
      observations: reservation.observations
    });
  }
}
