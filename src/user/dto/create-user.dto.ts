import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    id?: string;
    @IsString()
    username: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
}
