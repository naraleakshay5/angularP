import { TestBed } from '@angular/core/testing';

import { DumpService } from './dump.service';

describe('DumpService', () => {
  let service: DumpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DumpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
