import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoansDbDto } from './dto/create-loans_db.dto';
import { UpdateLoansDbDto } from './dto/update-loans_db.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoansDb } from './entities/loans_db.entity';


@Injectable()
export class LoansDbService {
    constructor(
    @InjectRepository(LoansDb, 'loans')
    private readonly loansDbRepository: Repository<LoansDb>
    ){}
    
  
  async create(createLoansDbDto: CreateLoansDbDto) {
    return await this.loansDbRepository.save(createLoansDbDto)
  
  }
  
  async createLoanApplication(data: any) {
    const { personalDetails, parentDetails, bankDetails } = data;
    console.log('Saving combined data:', { personalDetails, parentDetails, bankDetails });

    return { message: 'Loan application saved successfully!', data };
  }

  async findAll() {
    return await this.loansDbRepository.find();

  }

  async findOne(userid: number): Promise<any|undefined> {
    const student = await this.loansDbRepository.findOne({
      where: {id:userid}
    });
    if(!student){
    throw new NotFoundException ("student not found")
  }
  else{
    return student
  }
}
async update(id: number, updateLoansDbDto: UpdateLoansDbDto) {
  const student = await this.loansDbRepository.preload({
    id,
    ...updateLoansDbDto
  });
   if(!student){
    throw new NotFoundException ('user not found')
}
return this.loansDbRepository.save(student);
}
async remove(id: number) {
  const student = await this.loansDbRepository.find({
    where: {id}
  });
   if(student){
    return this.loansDbRepository.remove(student)
}
 else{
  throw new NotFoundException ('action cant delete student')
 }
}

}
