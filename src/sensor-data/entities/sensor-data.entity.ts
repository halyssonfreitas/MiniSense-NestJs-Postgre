import { IsDate, IsEmpty, IsNumber } from "class-validator";
import { DataStream } from "src/data-stream/entities/data-stream.entity";
import { MeasurementUnit } from "src/measurement-unit/entities/measurement-unit.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class SensorData {
    @PrimaryColumn()
    @IsEmpty()
    id?: string

    @Column()
    @IsDate()
    timestamp: Date

    @Column()
    @IsNumber()
    value: number

    @ManyToOne(() => MeasurementUnit, unitId => unitId.sensorData)
    unitId : MeasurementUnit

    @ManyToOne(() => DataStream, dataStream => dataStream.sensoData)
    dataStream : DataStream
}
