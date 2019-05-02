import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UserSubject: BehaviorSubject<UserModel> = new BehaviorSubject(new UserModel());

  constructor() { }

  getUser() {
    return this.UserSubject.asObservable();
  }

  setUser(user: UserModel) {
    this.UserSubject.next(user);
  }
}
