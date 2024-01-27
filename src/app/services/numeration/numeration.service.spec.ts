import { TestBed } from '@angular/core/testing';

import { NumerationService } from './numeration.service';

describe('NumerationService', () => {
  let service: NumerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
