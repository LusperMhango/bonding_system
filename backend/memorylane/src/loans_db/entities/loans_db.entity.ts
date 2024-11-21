import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoansDb {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    personalDetails: string

    @Column()
    parentDetails: string

    @Column()
    loanAmount: string

    @Column()
    bankDetails: string

}
