import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(AuthService).getAccessToken();

  if (accessToken) {
    const cloneReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next(cloneReq);
  }

  return next(req);
};
