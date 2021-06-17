import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeReadonlyPageRoutingModule } from './home-readonly-routing.module';

import { HomeReadonlyPage } from './home-readonly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeReadonlyPageRoutingModule
  ],
  declarations: [HomeReadonlyPage]
})
export class HomeReadonlyPageModule {}
