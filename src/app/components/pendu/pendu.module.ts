import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenduRoutingModule } from './pendu-routing.module';
import {PenduComponent} from './page/pendu.component';

@NgModule({
  declarations: [PenduComponent],
  imports: [
    CommonModule,
    PenduRoutingModule
  ]
})
export class PenduModule { }
