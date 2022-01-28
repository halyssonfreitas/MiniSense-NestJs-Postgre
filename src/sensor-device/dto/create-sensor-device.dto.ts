import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsOptional, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateSensorDeviceDto {
    @ApiHideProperty()
    @IsEmpty()
    id?: string;

    @ApiHideProperty()
    @IsEmpty()
    key?: string;

    @ApiProperty()
    @IsString()
    label: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiHideProperty()
    @IsOptional()
    user?: User;

}
