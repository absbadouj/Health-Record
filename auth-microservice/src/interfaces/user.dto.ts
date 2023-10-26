import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength, IsStrongPassword } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ type: String, description: 'The username of the user' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ type: String, description: 'The email of the user' })
    email: string;

    @IsStrongPassword()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'The password of the user' })
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'The birth date of the user' })
    birthDate: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'The address of the user' })
    address: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'The phone number of the user' })
    phoneNumber: string;

    setHashedPassword(password: string) {
        this.password = password;
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}