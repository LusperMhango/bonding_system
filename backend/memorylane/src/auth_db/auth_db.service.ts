import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDbDto } from './dto/create-auth_db.dto';
import { UpdateAuthDbDto } from './dto/update-auth_db.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth_db.entity';
import { Repository } from 'typeorm';

export type AuthT = any;

@Injectable()
export class AuthDbService {

  constructor(
    @InjectRepository(Auth)
    private readonly AuthRepository: Repository<Auth>
  ){}

  async create(createAuthDbDto: CreateAuthDbDto) {
    return await this.AuthRepository.save(createAuthDbDto)
  }

  async findAll() {
    return await this.AuthRepository.find();
  }

  async findOne(RegNumber: string): Promise<AuthT | undefined> {
    const student = await this.AuthRepository.findOne({
      where: {RegNumber}
    })
    if(!student){
      throw new NotFoundException(`student with this ${RegNumber} does not exist`)
    }
    return student
  }

  async findOneByUser(email: string): Promise<AuthT | undefined> {
    return await this.AuthRepository.findOne({ where: { email } });
  }

  async update(RegNumber: string, updateAuthDbDto: UpdateAuthDbDto) {
    const student = await this.AuthRepository.preload({
      RegNumber,
      ...updateAuthDbDto
    });
     if(!student){
      throw new NotFoundException ('user not found')
  }
  return this.AuthRepository.save(student);
}

  async remove(RegNumber: string) {
    const student = await this.AuthRepository.find({
      where: {RegNumber}
    });
     if(student){
      return this.AuthRepository.remove(student)
  }
   else{
    throw new NotFoundException ('action cant delete student')
   }
}
}
