import { Test, TestingModule } from '@nestjs/testing';
import { ImmunizationsController } from './immunizations.controller';

describe('ImmunizationsController', () => {
  let controller: ImmunizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmunizationsController],
    }).compile();

    controller = module.get<ImmunizationsController>(ImmunizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
