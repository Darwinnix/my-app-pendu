import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginModule} from './components/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
