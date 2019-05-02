import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PenduComponent} from './pendu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PenduService} from '../services/pendu.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('PenduComponent', () => {
  let component: PenduComponent;
  let fixture: ComponentFixture<PenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PenduComponent],
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

  it('should increment "lettretrouve" if chosen letter is part of mysterious word', () => {
    component.tableauLettre = ['T', 'E', 'S', 'T'];
    component.chosenLetter = 'T';
    component.randomMot = 'test';
    component.keyEvent();
    expect(component.lettresTrouvees).toBeGreaterThan(0);
  });

  it('should increment "essai" if chosen letter is not part of mysterious word', () => {
    component.tableauLettre = ['T', 'E', 'S', 'T'];
    component.chosenLetter = 'A';
    component.randomMot = 'test';
    component.keyEvent();
    expect(component.essai).toBeGreaterThan(0);
  });

  it('should change "gagne" to true if number of found letters = numbers of letters in mysterious word', () => {
    component.tableauLettre = ['T'];
    component.chosenLetter = 'T';
    component.randomMot = 't';
    component.keyEvent();
    expect(component.gagne).toBeTruthy();
  });

  it('should change "perdu" to true if number trys >= 10', () => {
    component.essai = 9;
    component.tableauLettre = ['T'];
    component.chosenLetter = 'A';
    component.randomMot = 't';
    component.keyEvent();
    expect(component.perdu).toBeTruthy();
  });

  it('should increment number of party each end of won party', () => {
    component.essai = 9;
    component.tableauLettre = ['T'];
    component.chosenLetter = 'T';
    component.randomMot = 't';
    component.keyEvent();
    expect(component.partiestotales).toBeGreaterThan(0);
  });

  it('should increment number of party each end of lost party', () => {
    component.essai = 9;
    component.tableauLettre = ['T'];
    component.chosenLetter = 'A';
    component.randomMot = 't';
    component.keyEvent();
    expect(component.partiestotales).toBeGreaterThan(0);
  });

  it('should increment number of won party each end of won party', () => {
    component.essai = 9;
    component.tableauLettre = ['T'];
    component.chosenLetter = 'T';
    component.randomMot = 't';
    component.keyEvent();
    expect(component.partiesGagnees).toBeGreaterThan(0);
  });

  it('shouldn\'t increment number of won party each end of lost party', () => {
    component.essai = 9;
    component.tableauLettre = ['T'];
    component.chosenLetter = 'A';
    component.randomMot = 't';
    component.keyEvent();
    expect(component.partiesGagnees).toEqual(0);
  });
});
