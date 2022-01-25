import { IsEmpty } from "class-validator";
import { DataStream } from "src/data-stream/entities/data-stream.entity";
import { SensorData } from "src/sensor-data/entities/sensor-data.entity";
import { SensorDevice } from "src/sensor-device/entities/sensor-device.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class MeasurementUnit {
    @PrimaryColumn()
    @IsEmpty()
    id: string;

    @Column()
    symbol: string;

    @Column()
    description: string;

    @OneToMany(() => DataStream, dataStream => dataStream.unit)
    dataStream: DataStream[]

    @OneToMany(() => SensorData, sensorData => sensorData.unit)
    sensorData: SensorData[]

}
