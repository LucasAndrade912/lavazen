import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [LoginPageComponent, SignupPageComponent],
})
export class AuthModule {}
