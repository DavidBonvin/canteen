// canteen/src/app/features/public/components/login/login.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
          (response) => {
            const role = this.authService.getRole();
            if (role === 'ROLE_LUNCHLADY') {
              this.router.navigate(['/admin']);
            } else if (role === 'ROLE_USER') {
              this.router.navigate(['/user']);
            } else {
              this.router.navigate(['/public']);
            }
          },
          (error) => {
            console.error('Login failed', error);
          }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/public']);
  }
}
