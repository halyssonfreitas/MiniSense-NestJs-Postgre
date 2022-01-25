import { IsDate, IsDateString, IsEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Timestamp } from "typeorm"

export class CreateSensorDataDto {
    @IsEmpty()
    @IsOptional()
    id?: string

    @IsString()
    timestamp: string

    @IsNumber()
    value: number

    @IsString()
    @IsOptional()
    unitId : any

    @IsString()
    @IsOptional()
    dataStream : any
}
