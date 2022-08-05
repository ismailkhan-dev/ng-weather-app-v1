import { TestBed } from '@angular/core/testing';

import { ComprehensiveWeatherService } from './comprehensive-weather.service';

describe('ComprehensiveWeatherService', () => {
  let service: ComprehensiveWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprehensiveWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
