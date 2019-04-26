import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DocumentationComponent } from './documentation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PenduComponent} from '../../pendu/page/pendu.component';
import {LoginService} from '../../login/services/login.service';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';
import {Location} from '@angular/common';

describe('DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationComponent, PenduComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'pendu', component: PenduComponent}
        ])
      ],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to pendu',
    async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.detectChanges();

      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/pendu');
      });
    })));
});
