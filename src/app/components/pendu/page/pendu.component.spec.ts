import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenduComponent } from './pendu.component';

describe('PenduComponent', () => {
  let component: PenduComponent;
  let fixture: ComponentFixture<PenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
