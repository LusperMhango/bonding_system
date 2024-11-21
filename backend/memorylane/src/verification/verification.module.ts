import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BondStatus } from 'src/bond_status/entities/bond_status.entity';
import { College } from 'src/university/entities/university.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([College], 'university'),
    TypeOrmModule.forFeature([BondStatus], 'bond')
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
  exports:[VerificationService]
})
export class VerificationModule {}
