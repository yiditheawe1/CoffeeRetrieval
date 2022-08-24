import { TestBed } from '@angular/core/testing';

import { CoffeeServicesService } from './coffee-services.service';

describe('CoffeeServicesService', () => {
  let service: CoffeeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
