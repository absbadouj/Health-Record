import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthController } from '../controller/auth.controller';
import { UserModule } from '../../user/module/user.module';
import { UserRepository } from '../../user/repository/user.repository';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { UserService } from '../../user/service/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from '../jwt/service/jwt-strategy.service';
import { APP_GUARD } from '@nestjs/core';
import { MyCustomKeyInterceptor } from 'src/interceptors/custom-cach.interceptor';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { ConfigurationModule } from '../../../configuration/configuration.module';
import { ConfigurationService } from '../../../configuration/configuration.service';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    ConfigurationModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    UserRepository,
    UserService,
    JwtStrategyService,
    MyCustomKeyInterceptor,
    ConfigurationService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
  controllers: [AuthController]
})
export class AuthModule { }
