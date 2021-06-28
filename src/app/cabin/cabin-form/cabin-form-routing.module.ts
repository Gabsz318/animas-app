import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabinFormPage } from './cabin-form.page';

const routes: Routes = [
  {
    path: '',
    component: CabinFormPage
  },
  {
    path: ':cabinId',
    component: CabinFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinFormPageRoutingModule {}
