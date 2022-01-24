import { Column, Entity, PrimaryColumn } from "typeorm";
import {IsEmail} from "class-validator";

@Entity()
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    @IsEmail()
    email: string;
}
