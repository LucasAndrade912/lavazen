import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProfileComponent],
})
export class UserModule {}
