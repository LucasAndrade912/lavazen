import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = true;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === 'admin@admin.com' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['/app/home']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
