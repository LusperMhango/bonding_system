import { Module } from '@nestjs/common';
import { LoansDbService } from './loans_db.service';
import { LoansDbController } from './loans_db.controller';

@Module({
  controllers: [LoansDbController],
  providers: [LoansDbService],
})
export class LoansDbModule {}
