import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig, typeOrmConfigStatus} from 'typeOrmConfig';
import { AuthDbModule } from './auth_db/auth_db.module';
import { LoansDbModule } from './loans_db/loans_db.module';
import { AuthModule } from './auth/auth.module';
import { BondStatusModule } from './bond_status/bond_status.module';
import { VerificationModule } from './verification/verification.module';
import { UniversityModule } from './university/university.module';
import { typeOrmConfigUniversity } from 'typeOrmConfigUniversity';




@Module({
  imports:[TypeOrmModule.forRoot(typeOrmConfigUniversity),
           TypeOrmModule.forRoot(typeOrmConfig),
           TypeOrmModule.forRoot(typeOrmConfigStatus),
    AuthDbModule,
    LoansDbModule,
    AuthModule,
    BondStatusModule,
    VerificationModule,
    UniversityModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
