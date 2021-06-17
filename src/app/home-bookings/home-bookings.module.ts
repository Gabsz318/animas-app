import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBookingsPageRoutingModule } from './home-bookings-routing.module';

import { HomeBookingsPage } from './home-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBookingsPageRoutingModule
  ],
  declarations: [HomeBookingsPage]
})
export class HomeBookingsPageModule {}
