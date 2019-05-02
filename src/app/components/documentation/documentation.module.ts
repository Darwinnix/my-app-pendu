import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import {DocumentationComponent} from './page/documentation.component';
import {RouterModule} from '@angular/router';

const loginRouting: ModuleWithProviders = RouterModule.forChild( [
  {
    path: 'doc',
    component: DocumentationComponent
  }
]);

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    loginRouting,
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
