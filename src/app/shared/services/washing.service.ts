import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface WashingResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class WashingService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<WashingResponse[]>(`${this.baseUrl}/washings`);
  }
}
