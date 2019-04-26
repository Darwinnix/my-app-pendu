import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PenduComponent} from './page/pendu.component';

const routes: Routes = [
  {
    path: 'pendu',
    children: [
      {
        path: '',
        component: PenduComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenduRoutingModule { }
