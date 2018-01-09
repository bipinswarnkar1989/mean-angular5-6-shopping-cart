import { TestBed, inject } from '@angular/core/testing';

import { LoggedInGuardService } from './logged-in-guard.service';

describe('LoggedInGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInGuardService]
    });
  });

  it('should be created', inject([LoggedInGuardService], (service: LoggedInGuardService) => {
    expect(service).toBeTruthy();
  }));
});
