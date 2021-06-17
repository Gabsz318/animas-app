import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisccountFormPage } from './disccount-form.page';

const routes: Routes = [
  {
    path: '',
    component: DisccountFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisccountFormPageRoutingModule {}
