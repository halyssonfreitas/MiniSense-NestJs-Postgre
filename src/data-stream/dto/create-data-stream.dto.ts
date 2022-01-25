import { IsBoolean, IsEmpty, IsOptional, IsString } from "class-validator"
import { SensorDevice } from "src/sensor-device/entities/sensor-device.entity"

export class CreateDataStreamDto {
    @IsEmpty()
    id?: string

    @IsEmpty()
    key?: string

    @IsString()
    label: string

    @IsEmpty()
    @IsBoolean()
    @IsOptional()
    enable?: boolean

    @IsEmpty()
    @IsOptional()
    sensorDevice?: any

    @IsString()
    unitId: any
}
