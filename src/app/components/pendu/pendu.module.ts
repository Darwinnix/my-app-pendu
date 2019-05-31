import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenduRoutingModule } from './pendu-routing.module';
import {PenduComponent} from './page/pendu.component';
import {CollapseModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PenduComponent],
  imports: [
    CommonModule,
    PenduRoutingModule,
    CollapseModule,
    HttpClientModule
  ]
})
export class PenduModule { }
