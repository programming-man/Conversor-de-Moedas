import { TestBed } from '@angular/core/testing';

import { ConversorMoedasService } from './conversor-api.service';

describe('ConversorMoedasService', () => {
  let service: ConversorMoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorMoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
