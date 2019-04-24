import {Injectable, isDevMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PenduService {

  readonly motsUrl = environment.mots;

  constructor(
    // tslint:disable-next-line:variable-name
    private _http: HttpClient
  ) { }

  getListOfMots(): Observable<any> {
    if (isDevMode()) {
      return this._http.get(this.motsUrl);
    }
  }
}
