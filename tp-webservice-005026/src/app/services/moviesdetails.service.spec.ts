import { TestBed } from '@angular/core/testing';

import { MoviesdetailsService } from './moviesdetails.service';

describe('MoviesdetailsService', () => {
  let service: MoviesdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
