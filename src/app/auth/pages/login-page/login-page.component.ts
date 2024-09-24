import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(4), Validators.maxLength(50)],
      password: [
        '',
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
      ],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulário válido', this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
