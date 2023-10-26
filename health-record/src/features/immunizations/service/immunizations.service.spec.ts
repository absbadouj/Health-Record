import { Test, TestingModule } from '@nestjs/testing';
import { ImmunizationsService } from './immunizations.service';

describe('ImmunizationsService', () => {
  let service: ImmunizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmunizationsService],
    }).compile();

    service = module.get<ImmunizationsService>(ImmunizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
