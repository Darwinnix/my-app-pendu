import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PenduComponent} from './page/pendu.component';
import {IsSignedInGuard} from '../../core/is-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    component: PenduComponent,
    canActivate: [
      IsSignedInGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenduRoutingModule { }
