import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisccountsPageRoutingModule } from './disccounts-routing.module';

import { DisccountsPage } from './disccounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisccountsPageRoutingModule
  ],
  declarations: [DisccountsPage]
})
export class DisccountsPageModule {}
