// canteen/src/app/features/public/components/register/register.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { UserDtoIn } from '../../../../auth/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) {
    this.registerForm = this.fb.group({
      address: ['', Validators.required],
      wallet: [0, [Validators.required, Validators.min(0), Validators.max(999)]],
      postalCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      phone: ['', Validators.required],
      town: ['', Validators.required],
      sex: [0, Validators.required],
      imagePath: [''],
      image64: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: UserDtoIn = {
        ...this.registerForm.value,
        image: {
          imagePath: this.registerForm.value.imagePath,
          image64: this.registerForm.value.image64
        }
      };
      this.authService.register(user).subscribe(response => {
        console.log('User registered successfully', response);
        this.router.navigate(['/home']);
      });
    }
  }
}
