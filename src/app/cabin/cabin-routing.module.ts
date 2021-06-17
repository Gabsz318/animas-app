import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabinPage } from './cabin.page';

const routes: Routes = [
  {
    path: '',
    component: CabinPage
  },
  {
    path: 'cabin-form',
    loadChildren: () => import('./cabin-form/cabin-form.module').then( m => m.CabinFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinPageRoutingModule {}
