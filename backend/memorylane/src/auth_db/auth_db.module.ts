import { Module } from '@nestjs/common';
import { AuthDbService } from './auth_db.service';
import { AuthDbController } from './auth_db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeOrmConfig';
import { Auth } from './entities/auth_db.entity';
import { Repository } from 'typeorm';

@Module({
  imports:[
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Auth, Repository<Auth>], 'default'),
    ],
  controllers: [AuthDbController],
  providers: [AuthDbService],
  exports:[AuthDbService],
})
export class AuthDbModule {}
