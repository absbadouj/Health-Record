import { Module } from '@nestjs/common';
import { ImmunizationsService } from '../service/immunizations.service';
import { ImmunizationsController } from '../controller/immunizations.controller';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { ImmunizationsRepository } from '../repository/immunization.repository';

@Module({
  imports: [PrismaModule],
  providers: [ImmunizationsService, ImmunizationsRepository],
  controllers: [ImmunizationsController]
})
export class ImmunizationsModule { }
