import { IsBoolean, IsEmpty, IsString } from "class-validator";
import { SensorDevice } from "src/sensor-device/entities/sensor-device.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

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
}
