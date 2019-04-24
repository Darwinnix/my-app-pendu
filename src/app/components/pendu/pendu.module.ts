import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenduRoutingModule } from './pendu-routing.module';
import {PenduComponent} from './page/pendu.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '../login/page/login.component';

const loginRouting: ModuleWithProviders = RouterModule.forChild( [
  {
    path: 'pendu',
    component: LoginComponent
  }
]);

@NgModule({
  declarations: [PenduComponent],
  imports: [
    loginRouting,
    CommonModule,
    PenduRoutingModule
  ]
})
export class PenduModule { }
