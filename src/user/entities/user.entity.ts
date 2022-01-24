import { Column, Entity, PrimaryColumn } from "typeorm";
import {IsEmail, IsEmpty} from "class-validator";

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
}
