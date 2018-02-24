import { TestBed, inject } from '@angular/core/testing';

import { ManufacturerService } from './manufacturer.service';

describe('ManufacturerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManufacturerService]
    });
  });

  it('should be created', inject([ManufacturerService], (service: ManufacturerService) => {
    expect(service).toBeTruthy();
  }));
});
