import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPageRoutingModule } from './help-routing.module';

import { HelpPage } from './help.page';
import { ReviewComponent } from '../review/review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpPageRoutingModule
  ],
  declarations: [HelpPage, ReviewComponent],
  entryComponents: [ReviewComponent]
})
export class HelpPageModule {}
