import { TestBed } from '@angular/core/testing';

import { AstroPhasesService } from './astro-phases.service';

describe('AstroPhasesService', () => {
  let service: AstroPhasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstroPhasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
