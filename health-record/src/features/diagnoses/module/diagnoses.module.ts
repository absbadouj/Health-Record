import { Module } from '@nestjs/common';
import { DiagnosesController } from '../controller/diagnoses.controller';
import { DiagnosesService } from '../service/diagnoses.service';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { DiagnosesRepository } from '../repository/allergies.repository';

@Module({
  imports: [PrismaModule],
  providers: [DiagnosesService, DiagnosesRepository],
  controllers: [DiagnosesController]
})
export class DiagnosesModule { }
