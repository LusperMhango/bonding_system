import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { Repository } from 'typeorm';
import { College } from './entities/university.entity';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UniversityService {
  
  constructor(
  @InjectRepository(College, 'university')
  private readonly collegeRepository: Repository<College>
  ){}

  async create(createUniversityDto: CreateUniversityDto){
    return await this.collegeRepository.save(createUniversityDto)
  }
   
  async findAll(){
    return await this.collegeRepository.find()
  }

  async findoneby(Regno: string){
    const student = await this.collegeRepository.findOne({
      where: {Regnumber : Regno}
    })
    if(!student){
      throw new NotFoundException (`user not found`);
    }
    else{
      return this.collegeRepository.findOneBy(student)
    }
  }
  async update(Regnumber: string, updateUniversityDto: UpdateUniversityDto){
    const student = await this.collegeRepository.preload({
      Regnumber: Regnumber,
      ...updateUniversityDto
    });
    if(!student){
      throw new NotFoundException (`cant update`)
    }
    else{
      return this.collegeRepository.save(student)
    }
  }
  async remove(Regnumber:string){
    const user= await this.collegeRepository.find({
       where: {Regnumber:Regnumber}
    });
    if(user){
      return this. collegeRepository.remove(user)
    }
    else{
      return `user cant be deleted`
    }
  }
}
