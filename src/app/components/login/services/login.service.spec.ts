import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {UserModel} from '../../../shared/models/user.model';
import {LoginComponent} from '../page/login.component';
import {DocumentationComponent} from '../../documentation/page/documentation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router, Routes} from '@angular/router';
import {Location} from '@angular/common';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

describe('LoginService', () => {

  let httpTestingController: HttpTestingController;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routes: Routes = [
    {path: 'doc', component: DocumentationComponent}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, DocumentationComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule
      ],
      providers: [LoginService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  })

  it('can test HttpClient.get', fakeAsync(() => {
    const service: LoginService = TestBed.get(LoginService);
    let oneUser: UserModel = new UserModel();
    const mockUser: any = {
      username: 'My user name'
    };
    service.setUser(mockUser);
    expect(service.UserSubject.value).toEqual(mockUser);
    service.getUser().subscribe((res: any) => {
      oneUser = res;
    });
    expect(oneUser).toEqual(mockUser);
  }));

  it('should be invalid when empty', fakeAsync((): void => {
    fixture.detectChanges();
    tick();
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('should have enabled button with filled username', async (() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('#username'));
      const el = input.nativeElement;
      component.loginForm.setValue('test');
    })


  }));

  it('should navigate to documentation',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component = fixture.componentInstance;
        const input = fixture.debugElement.query(By.css('#username'));
        const button = fixture.debugElement.nativeElement.querySelector('button');
        const el = input.nativeElement;
        el.username = 'my user name';
        el.dispatchEvent(new Event('input'));
        expect(button.disabled).toBeFalsy();
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        expect(location.path()).toEqual('/doc');
      });
    })));
});
