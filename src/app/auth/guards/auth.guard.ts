import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

export const authGuard: CanActivateFn = () => {
  if (inject(AuthService).isLoggedIn()) return true;

  return inject(Router).navigate(['/auth/login']);
};
