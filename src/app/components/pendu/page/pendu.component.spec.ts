import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenduComponent } from './pendu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PenduService} from '../services/pendu.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('PenduComponent', () => {
  let component: PenduComponent;
  let fixture: ComponentFixture<PenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenduComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [PenduService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not accept other characters than a-z, é and è', () => {
    const event = new KeyboardEvent('keyup', {key: '&'});
    component.tableauLettre = ['a'];
    component.keyEvent(event);
    expect(component.essai).toEqual(0);
  });

  it('should accept characters a-z, é and è', () => {
    const event = new KeyboardEvent('keyup', {key: 'a'});
    component.tableauLettre = ['a'];
    component.keyEvent(event);
    expect(component.essai).toBeGreaterThan(0);
  });
});
