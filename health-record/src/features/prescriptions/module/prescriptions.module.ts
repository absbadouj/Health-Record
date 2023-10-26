import { Module } from '@nestjs/common';
import { PrescriptionsService } from '../service/prescriptions.service';
import { PrescriptionsController } from '../controller/prescriptions.controller';
import { PrescriptionsRepository } from '../repository/prescriptions.repository';
import { PrismaModule } from 'src/prisma/module/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrescriptionsService, PrescriptionsRepository],
  controllers: [PrescriptionsController]
})
export class PrescriptionsModule { }
