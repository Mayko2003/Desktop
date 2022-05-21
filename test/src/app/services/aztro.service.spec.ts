import { TestBed } from '@angular/core/testing';

import { AztroService } from './aztro.service';

describe('AztroService', () => {
  let service: AztroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AztroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
