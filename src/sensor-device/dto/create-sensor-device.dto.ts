import { IsEmpty, IsOptional, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateSensorDeviceDto {
    @IsEmpty()
    id?: string;

    @IsEmpty()
    key?: string;

    @IsString()
    label: string;

    @IsString()
    description: string;

    @IsOptional()
    user?: User;

}
