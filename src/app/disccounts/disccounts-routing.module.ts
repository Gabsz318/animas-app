import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisccountsPage } from './disccounts.page';

const routes: Routes = [
  {
    path: '',
    component: DisccountsPage
  },
  {
    path: 'disccount-form',
    loadChildren: () => import('./disccount-form/disccount-form.module').then( m => m.DisccountFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisccountsPageRoutingModule {}
