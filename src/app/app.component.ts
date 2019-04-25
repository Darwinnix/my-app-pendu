import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from './components/login/services/login.service';
import {Subscription} from 'rxjs';
import {UserModel} from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'my-app-pendu';

  sub: Subscription;
  user: UserModel = new UserModel();

  constructor(
    // tslint:disable-next-line:variable-name
    private _loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.sub = this._loginService.getUser()
      .subscribe((res: any) => {
        this.user = res;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
