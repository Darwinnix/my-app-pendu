import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserModule} from '@angular/platform-browser';
import {LoginModule} from './components/login/login.module';
import {PenduModule} from './components/pendu/pendu.module';
import {HttpClientModule} from '@angular/common/http';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    rootRouting,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PenduModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
