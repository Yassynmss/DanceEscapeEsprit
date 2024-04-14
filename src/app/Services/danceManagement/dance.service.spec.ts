import { TestBed } from '@angular/core/testing';

import { DanceService } from './dance.service';

describe('DanceService', () => {
  let service: DanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
