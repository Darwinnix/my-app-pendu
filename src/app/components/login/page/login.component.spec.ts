import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {Form, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, Location} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {DocumentationComponent} from '../../documentation/page/documentation.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, DocumentationComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'doc', component: DocumentationComponent}
        ]),
      ],
      providers: [{provide: FormBuilder, useValue: formBuilder}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = formBuilder.group({
      username: null
    });
    fixture.detectChanges();
  });

  it('should be invalid when empty', fakeAsync((): void => {
    fixture.detectChanges();
    tick();
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('should be valid when filled', fakeAsync((): void => {
    const el = fixture.nativeElement.querySelector('input');
    const button = fixture.nativeElement.querySelector('button');
    el.value = 'one name';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    fixture.whenStable().then(() => {
      expect(component.loginForm.valid).toBeTruthy();
      expect(button.disabled).toBeFalsy();
    });
  }));

  it('should navigate to document',
    async(inject([Router, Location], (router: Router, location: Location) => {
      const el = fixture.nativeElement.querySelector('input');
      el.value = 'one name';
      el.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/doc');
      });
    })));
});
