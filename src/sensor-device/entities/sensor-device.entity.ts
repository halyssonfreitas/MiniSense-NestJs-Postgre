import { IsEmpty, IsString } from "class-validator";
import { Column, PrimaryColumn } from "typeorm";

export class SensorDevice {

    @PrimaryColumn()
    id?: string;

    @Column()
    @IsString()
    @IsEmpty()
    key?: string;

    label: string;

    description: string;

    user: string;
}
