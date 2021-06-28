import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-admin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-admin',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'home-bookings',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home-bookings/home-bookings.module').then( m => m.HomeBookingsPageModule)
  },
  {
    path: 'home-readonly',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home-readonly/home-readonly.module').then( m => m.HomeReadonlyPageModule)
  },
  {
    path: 'cabins',
    loadChildren: () => import('./cabin/cabin.module').then( m => m.CabinPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'disccounts',
    loadChildren: () => import('./disccounts/disccounts.module').then( m => m.DisccountsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
