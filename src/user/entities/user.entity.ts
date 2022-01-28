import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {IsEmail, IsEmpty} from "class-validator";
import { SensorDevice } from "src/sensor-device/entities/sensor-device.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {

    @PrimaryColumn()
    @IsEmpty()
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    username: string;

    @Column()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Column()
    @ApiProperty()
    password: string;

    @OneToMany(() => SensorDevice, sensorDevice => sensorDevice.user)
    sensorDevices : SensorDevice[];

}
