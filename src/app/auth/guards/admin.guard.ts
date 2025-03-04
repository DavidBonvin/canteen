import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAdmin = this.authService.isUserAdmin();
    console.log('AdminGuard canActivate:', isAdmin);
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
