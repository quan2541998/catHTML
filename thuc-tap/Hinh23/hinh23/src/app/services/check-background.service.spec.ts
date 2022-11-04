import { TestBed } from '@angular/core/testing';

import { CheckBackgroundService } from './check-background.service';

describe('CheckBackgroundService', () => {
  let service: CheckBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
