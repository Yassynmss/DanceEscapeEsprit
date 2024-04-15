import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EquipmentServiceService } from './Equipment-service.service';

describe('EquipmentServiceService', () => {
  let service: EquipmentServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EquipmentServiceService]
    });
    service = TestBed.inject(EquipmentServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // S'assurer qu'il n'y a pas de requêtes HTTP en suspens
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Ajoutez ici d'autres tests pour vos méthodes de service
});
