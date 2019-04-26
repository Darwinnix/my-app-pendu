import {TestBed, async, inject, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Router, Routes} from '@angular/router';
import {LoginModule} from './components/login/login.module';
import {LoginService} from './components/login/services/login.service';
import {DocumentationComponent} from './components/documentation/page/documentation.component';
import {Location} from '@angular/common';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {

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
  let location: Location;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, DocumentationComponent],
      providers: [LoginService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app-pendu'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app-pendu');
  });

  it('should navigate to Login', fakeAsync(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/login');
  }));
});
