import { Body, Controller, Logger, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from '../../../interfaces/user.dto';
import { AuthService } from '../service/auth.service';
import { Public } from '../../../decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(
        private readonly authService: AuthService,
    ) { }

    @Public()
    @Post('sign-in')
    async signIn(@Body() signInDto: CreateUserDto) {
        return this.authService.create(signInDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('sign-up')
    async signUp(@Body() registerUserDto: CreateUserDto) {
        return this.authService.create(registerUserDto);
    }
}
