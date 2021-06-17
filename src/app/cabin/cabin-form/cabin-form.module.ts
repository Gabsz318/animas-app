import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabinFormPageRoutingModule } from './cabin-form-routing.module';

import { CabinFormPage } from './cabin-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabinFormPageRoutingModule
  ],
  declarations: [CabinFormPage]
})
export class CabinFormPageModule {}
