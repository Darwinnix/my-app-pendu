import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../shared/models/user.model';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user: UserModel = new UserModel();

  constructor(
    // tslint:disable-next-line:variable-name
    private _formBuilder: FormBuilder, private _router: Router,
    // tslint:disable-next-line:variable-name
    private _loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
    });
  }

  get FormControl() {
    return this.loginForm.controls;
  }

  login() {
    this.user.username = this.loginForm.get('username').value;
    this._loginService.setUser(this.user);
    this._router.navigate(['/doc']);
  }
}
