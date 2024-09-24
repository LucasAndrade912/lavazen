import { Component } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group(
      {
        name: [
          '',
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
        password: [
          '',
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
        confirmPassword: [
          '',
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
        phone: [
          '',
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
      },
      {
        validators: this.matchPasswords(),
      } as AbstractControlOptions
    );
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

      // Define um erro se as senhas não coincidirem
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Formulário válido', this.signupForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
