import { Body, Controller, Logger, Post, UseFilters } from '@nestjs/common';
import { CreateUserDto } from '../../../framework/interfaces/user.dto';
import { AuthService } from '../service/auth.service';
import { Public } from '../../../framework/decorators/public.decorator';
import { HttpExceptionFilter } from 'src/framework/filters/HttpExceptionFilter';
import { UnauthorizedExceptionFilter } from 'src/framework/filters/UnauthorizedException';
import { PrismaClientExceptionFilter } from 'src/framework/filters/PrismaExceptionFilter';

// @UseFilters(new UnauthorizedExceptionFilter())
@UseFilters(new PrismaClientExceptionFilter())
@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(
        private readonly authService: AuthService,
    ) { }


    @Public()
    @Post('sign-in')
    async signIn(@Body() signInDto: CreateUserDto) {
        return this.authService.signIn(signInDto);
    }

    @Public()
    @Post('sign-up')
    async signUp(@Body() registerUserDto: CreateUserDto) {
        return this.authService.create(registerUserDto);
    }
}
