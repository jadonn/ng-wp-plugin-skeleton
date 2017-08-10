import { TestBed, inject } from '@angular/core/testing';

import { AdminListService } from './admin-list.service';

describe('AdminListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminListService]
    });
  });

  it('should be created', inject([AdminListService], (service: AdminListService) => {
    expect(service).toBeTruthy();
  }));
});
