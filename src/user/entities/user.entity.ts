import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {IsEmail, IsEmpty} from "class-validator";
import { SensorDevice } from "src/sensor-device/entities/sensor-device.entity";

@Entity()
export class User {

    @PrimaryColumn()
    @IsEmpty()
    id: string;

    @Column()
    username: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => SensorDevice, sensorDevice => sensorDevice.user)
    sensorDevices : SensorDevice[];

}
