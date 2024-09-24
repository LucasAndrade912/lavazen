import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './shared/layouts/layout/layout.component';
import { HomePageComponent } from './washing/pages/home-page/home-page.component';
import { ReservationsPageComponent } from './washing/pages/reservations-page/reservations-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
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
