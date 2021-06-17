import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabinPageRoutingModule } from './cabin-routing.module';

import { CabinPage } from './cabin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabinPageRoutingModule
  ],
  declarations: [CabinPage]
})
export class CabinPageModule {}
