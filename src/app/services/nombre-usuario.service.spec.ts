import { TestBed } from '@angular/core/testing';

import { NombreUsuarioService } from './nombre-usuario.service';

describe('NombreUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NombreUsuarioService = TestBed.get(NombreUsuarioService);
    expect(service).toBeTruthy();
  });
});
