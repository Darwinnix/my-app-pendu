import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginModule} from './components/login/login.module';
import {DocumentationModule} from './components/documentation/documentation.module';
import {PenduModule} from './components/pendu/pendu.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'doc',
    loadChildren: () => DocumentationModule
  },
  {
    path: 'pendu',
    loadChildren: () => PenduModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
