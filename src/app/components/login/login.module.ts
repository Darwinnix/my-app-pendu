import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './page/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


const loginRouting: ModuleWithProviders = RouterModule.forChild( [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]);

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    loginRouting,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class LoginModule { }
