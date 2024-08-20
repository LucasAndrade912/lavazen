import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { TypeOfWashingComponent } from './type-of-washing/type-of-washing.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ReservationFormComponent,
    TypeOfWashingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TypeOfWashingComponent]
})
export class WashingModule { }
