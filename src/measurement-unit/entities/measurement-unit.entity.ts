import { IsEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MeasurementUnit {
    @PrimaryColumn()
    @IsEmpty()
    id: string;

    @Column()
    symbol: string;

    @Column()
    description: string;

}
