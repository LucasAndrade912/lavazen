import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sweetAlertService: SweertalertService
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as {
        email: string;
        password: string;
      };

      this.authService.login(email, password);
    } else {
      if (this.loginForm.get('email')?.errors) {
        this.sweetAlertService.error(
          'Erro no login',
          'Preencha corretamente o campo de email.'
        );

        return;
      }

      if (this.loginForm.get('password')?.errors) {
        this.sweetAlertService.error(
          'Erro no login',
          'Preencha corretamente o campo de senha.'
        );

        return;
      }
    }
  }
}
