import { Module } from '@nestjs/common';
import { BondStatusService } from './bond_status.service';
import { BondStatusController } from './bond_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BondStatus } from './entities/bond_status.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BondStatus], 'bond')],
  controllers: [BondStatusController],
  providers: [BondStatusService],
  exports: [BondStatusModule]
})
export class BondStatusModule {}
