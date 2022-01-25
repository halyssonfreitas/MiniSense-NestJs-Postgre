import { IsDate, IsDecimal, IsEmpty, IsNumber, IsString } from "class-validator";
import { DataStream } from "src/data-stream/entities/data-stream.entity";
import { MeasurementUnit } from "src/measurement-unit/entities/measurement-unit.entity";
import { Column, Double, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class SensorData {
    @PrimaryColumn()
    @IsEmpty()
    id?: string

    @Column()
    @IsString()
    timestamp: string

    @Column({type: "double precision"})
    value: number

    @ManyToOne(() => MeasurementUnit, unit => unit.sensorData)
    unit : MeasurementUnit

    @ManyToOne(() => DataStream, dataStream => dataStream.sensorData)
    dataStream : DataStream
}
