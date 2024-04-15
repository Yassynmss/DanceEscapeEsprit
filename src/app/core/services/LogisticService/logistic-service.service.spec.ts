import { TestBed } from '@angular/core/testing';

import { LogisticServiceService } from './logistic-service.service';

describe('LogisticServiceService', () => {
  let service: LogisticServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
