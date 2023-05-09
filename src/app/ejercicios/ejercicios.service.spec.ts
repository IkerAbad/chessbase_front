import { TestBed } from '@angular/core/testing';

import { ejerciciossService } from './ejercicios.service';

describe('ejerciciossService', () => {
  let service: ejerciciossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ejerciciossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
