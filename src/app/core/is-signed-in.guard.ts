import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../components/login/services/login.service';
import {UserModel} from '../shared/models/user.model';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate, OnDestroy {
  user: UserModel = new UserModel();
  sub: Subscription;

  // tslint:disable-next-line:variable-name
  constructor(private _loginService: LoginService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isSignedIn = false;
    this.sub = this._loginService.getUser()
      .subscribe((res: any) => {
        this.user = res;
        if (this.user.username !== undefined) {
          isSignedIn = true;
        } else {
          isSignedIn = false;
        }
        if (!isSignedIn) {
          this._router.navigate(['/login']);
        }
      },
        (err: any) => {
        console.log('An error occurred during the call if user', err);
        });
    return isSignedIn;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
