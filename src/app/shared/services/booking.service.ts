import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
