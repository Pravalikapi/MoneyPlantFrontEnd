import { TestBed } from '@angular/core/testing';

import { ExpertoperationService } from './expertoperation.service';

describe('ExpertoperationService', () => {
  let service: ExpertoperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertoperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
