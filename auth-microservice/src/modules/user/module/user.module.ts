import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { UserService } from '../service/user.service';
import { UserRepository } from '../repository/user.repository';
import { HttpExceptionFilter } from 'src/framework/filters/HttpExceptionFilter';
import { UnauthorizedExceptionFilter } from 'src/framework/filters/UnauthorizedException';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserRepository, UnauthorizedExceptionFilter],
  controllers: [UserController]
})
export class UserModule { }
