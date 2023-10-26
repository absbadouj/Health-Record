import { IsEmail, IsISO8601, IsNotEmpty, IsPhoneNumber, IsString, Length, MinLength, isEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
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



}