import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/authentification/module/auth.module';
import { PinoLoggerModule } from './framework/Logger/logger.module';
import { HttpExceptionFilter } from './framework/filters/HttpExceptionFilter';



@Module({
  imports: [
    PinoLoggerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, HttpExceptionFilter
  ],
})
export class AppModule { }
