import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../../../framework/interfaces/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedExceptionFilter } from 'src/framework/filters/UnauthorizedException';
import { HttpExceptionFilter } from 'src/framework/filters/HttpExceptionFilter';
import { PrismaClientExceptionFilter } from 'src/framework/filters/PrismaExceptionFilter';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
@UseFilters(new HttpExceptionFilter())
@UseFilters(new UnauthorizedExceptionFilter())
@UseFilters(new PrismaClientExceptionFilter())

export class UserController {
    constructor(private readonly _userService: UserService) { }

    @Get()
    async findAll() {
        return await this._userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this._userService.findOne(id);
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        this._userService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: User) {
        this._userService.update(id, user);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this._userService.delete(id);
    }
}
