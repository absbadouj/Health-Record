import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './modules/authentification/module/auth.module';


@Module({
  imports: [
    AuthModule,
    LoggerModule.forRoot({
      pinoHttp: {
        // context in development logger
        customProps: (req, res) => ({
          context: "HTTP",
        }),
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
