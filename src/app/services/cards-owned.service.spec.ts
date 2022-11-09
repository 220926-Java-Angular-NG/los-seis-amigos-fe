import { TestBed } from '@angular/core/testing';

import { CardsOwnedService } from './cards-owned.service';

describe('CardsOwnedService', () => {
  let service: CardsOwnedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsOwnedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
