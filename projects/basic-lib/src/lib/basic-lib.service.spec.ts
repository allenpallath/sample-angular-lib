import { TestBed } from '@angular/core/testing';

import { BasicLibService } from './basic-lib.service';

describe('BasicLibService', () => {
  let service: BasicLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
