import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeReadonlyPage } from './home-readonly.page';

const routes: Routes = [
  {
    path: '',
    component: HomeReadonlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeReadonlyPageRoutingModule {}
