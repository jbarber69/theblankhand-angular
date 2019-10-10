import { TestBed } from '@angular/core/testing';

import { AppStateServiceService } from './app-state-service.service';

describe('AppStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStateServiceService = TestBed.get(AppStateServiceService);
    expect(service).toBeTruthy();
  });
});
