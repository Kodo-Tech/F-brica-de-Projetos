import { TestBed } from '@angular/core/testing';

import { DoadorService } from './doador-service.service';

describe('DoadorServiceService', () => {
  let service: DoadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
