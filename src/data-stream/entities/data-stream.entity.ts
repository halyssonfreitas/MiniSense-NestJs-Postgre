import { IsBoolean, IsEmpty, IsString } from "class-validator";
import { MeasurementUnit } from "src/measurement-unit/entities/measurement-unit.entity";
import { SensorData } from "src/sensor-data/entities/sensor-data.entity";
import { SensorDevice } from "src/sensor-device/entities/sensor-device.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class DataStream {
    @PrimaryColumn()
    @IsEmpty()
    id?: string

    @Column()
    @IsEmpty()
    key?: string

    @Column()
    @IsString()
    label: string

    @Column({default: false})
    @IsBoolean()
    enable: boolean

    @ManyToOne(() => SensorDevice, sensorDevice => sensorDevice.dataStream)
    sensorDevice: SensorDevice

    @ManyToOne(() => MeasurementUnit, unit => unit.dataStream)
    unit: MeasurementUnit

    @OneToMany(() => SensorData, sensoData => sensoData.dataStream)
    sensorData: SensorData[]
}
