import { TestBed } from '@angular/core/testing';

import { ReportCService } from './report-c.service';

describe('ReportCService', () => {
  let service: ReportCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
