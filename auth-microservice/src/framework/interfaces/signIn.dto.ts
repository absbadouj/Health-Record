import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength, IsStrongPassword } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

export class SignInDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ type: String, description: 'The email of the user' })
    email: string;

    @IsStrongPassword()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'The password of the user' })
    password: string;


    setHashedPassword(password: string) {
        this.password = password;
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

}