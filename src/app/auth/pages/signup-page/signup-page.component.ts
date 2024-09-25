import { Component } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { SweertalertService } from '../../../shared/services/sweertalert.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sweetAlertService: SweertalertService
  ) {
    this.signupForm = this.formBuilder.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
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
    if (this.signupForm.valid) {
      this.sweetAlertService.sucess(
        'Usuário cadastrado',
        'Usuário foi cadastrado com sucesso!'
      );
    } else {
      this.sweetAlertService.error('Erro no cadastro', 'Erro ao cadastrar novo usuário.');

      if (this.signupForm.get('email')?.errors) {
        this.sweetAlertService.error(
          'Erro no cadastro',
          'Preencha corretamente o campo de nome.'
        );

        return;
      }

      if (this.signupForm.get('email')?.errors) {
        this.sweetAlertService.error(
          'Erro no cadastro',
          'Preencha corretamente o campo de email.'
        );

        return;
      }

      if (this.signupForm.get('password')?.errors) {
        this.sweetAlertService.error(
          'Erro no cadastro',
          'Preencha corretamente o campo de senha.'
        );

        return;
      }

      if (this.signupForm.get('confirmPassword')?.errors) {
        this.sweetAlertService.error('Erro no cadastro', 'As senhas não coincidem.');

        return;
      }
    }
  }
}
