import { Module } from '@nestjs/common';
import { DrugService } from '../service/drug.service';
import { DrugController } from '../controller/drug.controller';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { DrugRepository } from '../repository/drug.repository';

@Module({
  imports: [PrismaModule],
  providers: [DrugService, DrugRepository],
  controllers: [DrugController]
})
export class DrugModule { }
