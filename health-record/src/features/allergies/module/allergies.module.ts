import { Module } from '@nestjs/common';
import { AllergiesController } from '../controller/allergies.controller';
import { AllergiesService } from '../service/allergies.service';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { AllergiesRepository } from '../repository/allergies.reposiroty';

@Module({
  imports: [PrismaModule],
  controllers: [AllergiesController],
  providers: [AllergiesService, AllergiesRepository]
})
export class AllergiesModule { }
