import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth/guards/auth.guard';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';
import { LayoutComponent } from './shared/layouts/layout/layout.component';
import { HomePageComponent } from './washing/pages/home-page/home-page.component';
import { ReservationsPageComponent } from './washing/pages/reservations-page/reservations-page.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'reservations', component: ReservationsPageComponent },
    ],
  },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
