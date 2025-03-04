import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserDtoIn, UserDtoOut } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/stone.lunchtime';
  private token: string | null = null;
  private userId: string | null = null;
  private userRole: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: UserDtoIn): Observable<UserDtoOut> {
    return this.http.post<UserDtoOut>(`${this.apiUrl}/user/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    console.log('Sending login request with credentials:', credentials);
    return this.http.post(`${this.apiUrl}/login`, credentials, {
      headers: { 'Content-Type': 'application/json' },
      observe: 'response' // Observe the full response to access headers
    }).pipe(
        tap(response => {
          console.log('Login response:', response);
          const authHeader = response.headers.get('Authorization');
          if (authHeader && authHeader.startsWith('Bearer ')) {
            this.token = authHeader.split(' ')[1];
            localStorage.setItem('token', this.token);
            console.log('Token stored in localStorage:', this.token);
            this.extractUserIdFromToken();
          } else {
            console.error('Authorization header is missing or invalid');
          }
        }),
        switchMap(() => this.getUserInfo()), // Get user info after login
        tap(user => {
          console.log('User info:', user);
          this.userRole = user.isLunchLady ? 'ROLE_LUNCHLADY' : 'ROLE_USER';
          console.log('User role:', this.userRole);
          if (user.isLunchLady) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        }),
        catchError((error) => {
          console.error('Login failed:', error);
          return throwError(error);
        })
    );
  }

  private extractUserIdFromToken() {
    if (this.token) {
      const payload = JSON.parse(atob(this.token.split('.')[1]));
      this.userId = payload.jti; // Assuming the user ID is stored in the 'jti' claim
      console.log('Extracted userId from token:', this.userId);
    }
  }

  getUserInfo(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    console.log('Fetching user info with userId:', this.userId);
    return this.http.get(`${this.apiUrl}/user/find/${this.userId}`, { headers });
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearCache() {
    this.token = null;
    localStorage.clear();
  }

  isUserAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isUserAdmin(): boolean {
    return this.userRole === 'ROLE_LUNCHLADY';
  }

  getRole(): string | null {
    return this.userRole;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }
}
