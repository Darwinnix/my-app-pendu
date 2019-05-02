import {fakeAsync, TestBed} from '@angular/core/testing';

import { PenduService } from './pendu.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('PenduService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PenduService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should use HttpClient.get', fakeAsync(() => {
    const service: PenduService = TestBed.get(PenduService);
    service.getListOfMots().subscribe((res: any) => {
      expect(res).toBeDefined();
    });
    const req = httpTestingController.expectOne(
      'http://localhost:3004/mots'
    );
    expect(req.request.method).toBe('GET');
  }));
});
