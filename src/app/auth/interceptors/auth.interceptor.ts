import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  if(!token)
    return next(req);
  
  const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);
  const modifiedReq = req.clone({headers});
  return next(modifiedReq);
};
