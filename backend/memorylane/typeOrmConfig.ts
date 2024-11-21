import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Auth } from "src/auth_db/entities/auth_db.entity";
import { BondStatus } from "src/bond_status/entities/bond_status.entity";



export const typeOrmConfig:TypeOrmModuleOptions ={
     name: 'default',
     type: 'mysql',
     host: 'localhost',
     port: 3306,
     username: 'root',
     password: '',
     database: 'Auth_db',
     entities: [Auth],
     synchronize: false,
     
};
export const typeOrmConfigStatus:TypeOrmModuleOptions ={
     name: 'bond',
     type: 'mysql',
     host: 'localhost',
     port: 3306,
     username: 'root',
     password: '',
     database: 'bond_status',
     entities: [BondStatus],
     synchronize: false,
     
};

