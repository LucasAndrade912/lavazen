import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  authService.checkTokenValidity();
  if (authService.isLoggedIn()) return true;

  return inject(Router).navigate(['/auth/login']);
};
