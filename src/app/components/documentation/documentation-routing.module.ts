import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentationComponent} from './page/documentation.component';
import {IsSignedInGuard} from '../../core/is-signed-in.guard';

const routes: Routes = [
  {
    path: 'doc',
    children: [
      {
        path: '',
        component: DocumentationComponent
      }
    ],
    canActivate: [
      IsSignedInGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
