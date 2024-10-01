import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs';

import { User } from '../models/user';

interface ProfileResponse {
  id: number;
  name: string;
  phone: string;
  birthDay: string;
  address: string;
}

interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  userId: number;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken = localStorage.getItem('lavazen.access_token') ?? '';
  private baseUrl = 'http://localhost:8080/auth';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/login`, {
        email: email.trim(),
        password: password.trim(),
      })
      .pipe(
        tap((response) => {
          this.accessToken = response.token;
          localStorage.setItem('lavazen.access_token', this.accessToken);
        })
      );
  }

  register(user: User) {
    return this.http
      .post<RegisterResponse>(`${this.baseUrl}/register`, {
        name: user.name.trim(),
        email: user.email.trim(),
        password: user.password.trim(),
        birthDay: user.birthDay.trim(),
      })
      .pipe(
        tap((response) => {
          this.accessToken = response.token;
          localStorage.setItem('lavazen.access_token', this.accessToken);
        })
      );
  }

  checkTokenValidity() {
    if (this.accessToken) {
      const decodedToken = jwtDecode(this.accessToken);
      const expiration = decodedToken.exp ?? 0;
      const expirationDate = expiration * 1000;

      const now = Date.now();

      if (now >= expirationDate) {
        this.logout();
      }
    }
  }

  logout() {
    this.accessToken = '';
    localStorage.removeItem('lavazen.access_token');
    this.router.navigate(['/login']);
  }

  profile() {
    return this.http.get<ProfileResponse>(`${this.baseUrl}/profile`);
  }

  updateProfile(name: string, phone: string, birthDay: string, address: string) {
    return this.http.patch<ProfileResponse>(`${this.baseUrl}/profile`, {
      name,
      phone,
      birthDay,
      address,
    });
  }

  deleteProfile() {
    return this.http.delete(`${this.baseUrl}/profile`);
  }

  getAccessToken() {
    return this.accessToken;
  }

  isLoggedIn() {
    return this.accessToken != '';
  }
}
