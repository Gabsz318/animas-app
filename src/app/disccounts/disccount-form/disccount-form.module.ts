import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisccountFormPageRoutingModule } from './disccount-form-routing.module';

import { DisccountFormPage } from './disccount-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisccountFormPageRoutingModule
  ],
  declarations: [DisccountFormPage]
})
export class DisccountFormPageModule {}
