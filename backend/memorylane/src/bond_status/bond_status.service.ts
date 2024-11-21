import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBondStatusDto } from './dto/create-bond_status.dto';
import { UpdateBondStatusDto } from './dto/update-bond_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BondStatus } from './entities/bond_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BondStatusService {

    constructor(
    @InjectRepository(BondStatus, 'bond')
    private readonly BondstatusRepository: Repository<BondStatus>
  ){}

  async create(createBondStatusDto: CreateBondStatusDto) {
    return await this. BondstatusRepository.save(createBondStatusDto)
  }

  async findAll() {
    return await this.BondstatusRepository.find()
  }

  async update(Regnumber: string, updateBondStatusDto: UpdateBondStatusDto) {
     const student = await this.BondstatusRepository.preload({
      Regnumber,
      ...updateBondStatusDto
     });
     if(!student)
    {
      throw new NotFoundException (`student not found`)
    }
    else{
      return this.BondstatusRepository.save(student)
    }
  }

  async remove(Regnumber: string) {
   const student = await this.BondstatusRepository.find({
     where:{Regnumber:Regnumber}
   })
   if(student){
    return this.BondstatusRepository.remove(student)
   }
  }
}
