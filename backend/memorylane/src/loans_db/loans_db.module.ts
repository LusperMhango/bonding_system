import { Module } from '@nestjs/common';
import { LoansDbService } from './loans_db.service';
import { LoansDbController } from './loans_db.controller';
import { LoansDb } from './entities/loans_db.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([LoansDb], 'loans') 
  ],
  controllers: [LoansDbController],
  providers: [LoansDbService],
  exports: [LoansDbService]
})
export class LoansDbModule {}
