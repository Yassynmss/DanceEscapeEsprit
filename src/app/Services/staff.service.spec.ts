import { TestBed } from '@angular/core/testing';

import { STAFFService } from './staff.service';

describe('STAFFService', () => {
  let service: STAFFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STAFFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
