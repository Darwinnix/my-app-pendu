import {async, TestBed} from '@angular/core/testing';

import { LoginService } from './login.service';
import {UserModel} from '../../../shared/models/user.model';

describe('LoginService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [LoginService]
    });
  });

  it('should set and get User subject', async (() => {
    const service: LoginService = TestBed.get(LoginService);
    const user: UserModel = new UserModel();
    user.username = 'one name';
    console.log('user is ', user);
    service.setUser(user);
    service.getUser().subscribe((res: any) => {
      expect(res.username).toEqual('one name');
    });
  }));
});
