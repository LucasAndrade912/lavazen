import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sweetAlertService: SweertalertService,
    private router: Router
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

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['app', 'home']);
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as {
        email: string;
        password: string;
      };

      this.authService.login(email, password).subscribe({
        next: () => {
          this.sweetAlertService.sucess(
            'Login bem sucedido',
            'Usuário logado no sistema com sucesso!'
          );

          this.router.navigate(['app', 'home']);
        },
        error: () =>
          this.sweetAlertService.error(
            'Erro no login',
            'Usuário inexistente ou senha inválida.'
          ),
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
