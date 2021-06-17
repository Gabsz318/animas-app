import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBookingsPage } from './home-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBookingsPageRoutingModule {}
