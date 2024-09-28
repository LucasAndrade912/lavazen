import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';

import { User } from '../../../shared/models/user';
import { AuthService } from '../../../shared/services/auth.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';
import { UserService } from '../../../shared/services/user.service';
import { SignUpFormData } from './interfaces';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class SignupPageComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sweetAlertService: SweertalertService,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        birthDay: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]),
      },
      {
        validators: this.matchPasswords(),
      } as AbstractControlOptions
    );
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['app', 'home']);
    }
  }

  matchPasswords() {
    return (group: AbstractControl) => {
      const passwordControl = group.get('password');
      const confirmPasswordControl = group.get('confirmPassword');

      if (!passwordControl || !confirmPasswordControl) return null;

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) {
      const data = this.signupForm.value as SignUpFormData;

      const user = new User({
        name: data.name,
        email: data.email,
        password: data.password,
        birthDay: data.birthDay.toLocaleDateString(),
      });

      this.userService.createUser(user).subscribe({
        next: () => {
          this.sweetAlertService.sucess(
            'Usuário cadastrado',
            'Usuário foi cadastrado com sucesso!'
          );
        },
      });
    }
  }

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get birthDay() {
    return this.signupForm.get('birthDay');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
