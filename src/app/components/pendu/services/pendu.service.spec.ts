import { TestBed } from '@angular/core/testing';

import { PenduService } from './pendu.service';

describe('PenduService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenduService = TestBed.get(PenduService);
    expect(service).toBeTruthy();
  });
});
