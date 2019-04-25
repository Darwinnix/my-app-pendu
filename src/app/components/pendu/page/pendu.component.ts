import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {PenduService} from '../services/pendu.service';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-pendu',
  templateUrl: './pendu.component.html',
  styleUrls: ['./pendu.component.sass'],
})
export class PenduComponent implements OnInit, OnDestroy {



  sub: Subscription;
  mots: string[] = [];
  randomMot: any;
  motMystere: any[] = [];
  essai: 0;

  constructor(
    // tslint:disable-next-line:variable-name
    private _penduService: PenduService
  ) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.randomMot) {
      this.essai += 1;
      this.randomMot.mot.split('').forEach((lettre, i) => {
        if (event.key === lettre) {
          this.motMystere[i] = lettre;
        }
      });
    }
  }

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
    this.randomMot = this.mots[Math.floor(Math.random() * this.mots.length)];
    console.log('mon mot aléatoire: ', this.randomMot);
    console.log('mon array de char est ', this.randomMot.mot.split(''));
    for (const lettre of this.randomMot.mot.split('')) {
      this.motMystere.push('?');
    }
    console.log('mon mot mystere est ', this.motMystere);
  }

  chooseLetter($event: KeyboardEvent) {
    console.log($event.key);
  }
}
