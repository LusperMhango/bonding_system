import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class BondStatus {
      
    @PrimaryColumn()
    Regnumber: string;

    @Column({ type: 'boolean' })
    activeStatus: boolean; 

}
