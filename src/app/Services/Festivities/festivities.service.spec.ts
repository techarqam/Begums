import { TestBed } from '@angular/core/testing';

import { FestivitiesService } from './festivities.service';

describe('FestivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FestivitiesService = TestBed.get(FestivitiesService);
    expect(service).toBeTruthy();
  });
});
