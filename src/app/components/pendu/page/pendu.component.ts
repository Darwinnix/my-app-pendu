import {Component, OnDestroy, OnInit} from '@angular/core';
import {PenduService} from '../services/pendu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pendu',
  templateUrl: './pendu.component.html',
  styleUrls: ['./pendu.component.sass']
})
export class PenduComponent implements OnInit, OnDestroy {

  sub: Subscription;
  mots: any[] = [];
  randomMot: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _penduService: PenduService
  ) { }

  ngOnInit() {
    this.sub = this._penduService.getListOfMots()
      .subscribe(res => {
        this.mots = res;
        console.log('mes mots valent ', res);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  randomizeMot() {
    this.randomMot = this.mots[Math.floor(Math.random() * this.mots.length)]
    console.log('mon mot aléatoire: ', this.randomMot);
  }

}
