import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../../login/services/login.service';
import {UserModel} from '../../../shared/models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.sass']
})
export class DocumentationComponent implements OnInit, OnDestroy {

  user: UserModel = new UserModel();
  sub: Subscription;

  constructor(
    // tslint:disable-next-line:variable-name
    private _loginService: LoginService,
  ) { }

  ngOnInit() {
    this.sub = this._loginService.getUser()
      .subscribe((res: any) => {
        this.user = res;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
