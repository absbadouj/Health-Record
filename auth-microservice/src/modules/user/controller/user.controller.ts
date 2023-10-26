import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../../../interfaces/user.dto';

@Controller('users')
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
