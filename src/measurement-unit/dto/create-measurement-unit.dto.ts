import { IsEmpty, IsString } from "class-validator";

export class CreateMeasurementUnitDto {
    
    @IsEmpty()
    id: string;

    @IsString()
    symbol: string;

    @IsString()
    description: string;
}
