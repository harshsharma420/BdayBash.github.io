import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ShopPage } from './shop.page';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ShopPage,FilterComponent],
  entryComponents: [FilterComponent]
})
export class ShopPageModule {}
