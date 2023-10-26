import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../../../interfaces/user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { SignInDto } from '../../../interfaces/signIn.dto';
import { UserService } from '../../user/service/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly _userService: UserService,
        private readonly _jwtService: JwtService
    ) { }


    async create(registerUserDto: CreateUserDto): Promise<User> {
        const { password } = registerUserDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        registerUserDto.password = hashedPassword;
        return this._userService.create(registerUserDto);
    }

    async signIn(signInDto: SignInDto) {
        const { email, password } = signInDto;
        const user = await this._userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid username or password');
        }
        const passwordIsValid = await this.validatePassword(password, user.password);
        if (!passwordIsValid) {
            throw new UnauthorizedException('Invalid username or password');
        }
        const payload = { sub: user.id, username: user.email };
        const accessToken = await this._jwtService.signAsync(payload);
        return { access_token: accessToken };
    }

    async validatePassword(password: string, userPassword): Promise<boolean> {
        return bcrypt.compare(password, userPassword);
    }
}
