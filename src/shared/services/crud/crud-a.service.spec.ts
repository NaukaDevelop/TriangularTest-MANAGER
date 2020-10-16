import { TestBed } from '@angular/core/testing';

import { CrudAService } from './crud-a.service';

describe('CrudAService', () => {
  let service: CrudAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
