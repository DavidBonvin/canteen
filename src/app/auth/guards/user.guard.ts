import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isUser = this.authService.getRole() === 'ROLE_USER';
    console.log('UserGuard canActivate:', isUser);
    if (isUser) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
