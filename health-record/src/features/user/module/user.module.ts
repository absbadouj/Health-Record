import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { PrismaModule } from 'src/prisma/module/prisma.module';
import { UserService } from '../service/user.service';
import { UserRepository } from '../repository/user.repository';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserRepository],
  controllers: [UserController]
})
export class UserModule { }
