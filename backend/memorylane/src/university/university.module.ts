import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './entities/university.entity';





@Module({
  imports:[
    TypeOrmModule.forFeature([College], 'university'),
   ],
  controllers: [UniversityController],
  providers: [UniversityService],
  exports: [UniversityService]
})
export class UniversityModule {}
