import { TestBed } from '@angular/core/testing';

import { DateConvertService } from './date-service.service';

describe('DateServiceService', () => {
  let service: DateConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
