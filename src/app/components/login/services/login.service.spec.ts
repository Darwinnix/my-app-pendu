import {fakeAsync, TestBed} from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('LoginService', () => {

  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        LoginService
      ]
    });

    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('can test HttpClient.get', fakeAsync(() => {
    const service: LoginService = TestBed.get(LoginService);
    const mockUser: any = {
      username: 'My user name'
    };
    service.setUser(mockUser);
    expect(service.UserSubject).toEqual(mockUser);
  }));
});
