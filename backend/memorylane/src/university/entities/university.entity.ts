import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class College {

    @PrimaryColumn()
    Regnumber: string;

    @Column()
    fullname: string;
}
