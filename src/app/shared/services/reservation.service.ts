import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WashingReservation } from '../models/washing-reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private endpoint = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) {}

  createReservation(reservation: WashingReservation): Observable<WashingReservation> {
    return this.http.post<WashingReservation>(this.endpoint, {
      userId: '1',
      washingId: '1',
      date: reservation.date,
      carModel: reservation.carModel,
      paymentMethod: reservation.paymentMethod,
      observations: reservation.observations,
    });
  }

  listReservations(): Observable<WashingReservation[]> {
    return this.http.get<WashingReservation[]>(
      `${this.endpoint}?_embed=washing&_embed=user`
    );
  }
}
