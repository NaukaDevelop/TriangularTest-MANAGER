import { TestBed } from '@angular/core/testing';

import { CrudCService } from './crud-c.service';

describe('CrudCService', () => {
  let service: CrudCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
