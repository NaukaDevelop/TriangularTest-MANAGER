import { TestBed } from '@angular/core/testing';

import { ReportAService } from './report-a.service';

describe('ReportAService', () => {
  let service: ReportAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
