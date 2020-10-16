import { TestBed } from '@angular/core/testing';

import { ReportBService } from './report-b.service';

describe('ReportBService', () => {
  let service: ReportBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
