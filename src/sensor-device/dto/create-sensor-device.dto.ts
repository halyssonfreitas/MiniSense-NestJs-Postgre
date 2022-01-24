import { IsEmpty, IsString } from "class-validator";

export class CreateSensorDeviceDto {
    @IsEmpty()
    id?: string;

    @IsEmpty()
    key?: string;

    @IsString()
    label: string;

    @IsString()
    description: string;

}
