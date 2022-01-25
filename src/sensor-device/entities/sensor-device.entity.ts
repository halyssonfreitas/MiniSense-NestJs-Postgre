import { IsEmpty, IsString } from "class-validator";
import { DataStream } from "src/data-stream/entities/data-stream.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class SensorDevice {

    @PrimaryColumn()
    id?: string;

    @Column()
    @IsString()
    key?: string;

    @Column()
    @IsString()
    label: string;

    @Column()
    @IsString()
    description: string;

    @ManyToOne(() => User, user => user.sensorDevices)
    user: User;

    @OneToMany(() => DataStream, dataStream => dataStream.sensorDevice)
    dataStream: DataStream[]


}
