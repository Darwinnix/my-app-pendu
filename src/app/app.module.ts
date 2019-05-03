import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserModule} from '@angular/platform-browser';
import {LoginModule} from './components/login/login.module';
import {PenduModule} from './components/pendu/pendu.module';
import {HttpClientModule} from '@angular/common/http';
import {DocumentationModule} from './components/documentation/documentation.module';
import {IsSignedInGuard} from './core/is-signed-in.guard';

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
    DocumentationModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [IsSignedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
