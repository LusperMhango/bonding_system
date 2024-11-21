import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { College } from "src/university/entities/university.entity";

export const typeOrmConfigUniversity:TypeOrmModuleOptions ={
    name: 'university',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'college',
    entities: [College],
    synchronize: false,
    
}