import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/module/prisma.module';
import { UserModule } from './features/user/module/user.module';
import { DrugModule } from './features/drug/module/drug.module';
import { PrescriptionsModule } from './features/prescriptions/module/prescriptions.module';
import { DiagnosesModule } from './features/diagnoses/module/diagnoses.module';
import { AllergiesModule } from './features/allergies/module/allergies.module';
import { ImmunizationsModule } from './features/immunizations/module/immunizations.module';


@Module({
  imports: [
    PrismaModule,
    UserModule,
    DrugModule,
    PrescriptionsModule,
    DiagnosesModule,
    AllergiesModule,
    ImmunizationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
