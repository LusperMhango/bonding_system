import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BondStatus } from 'src/bond_status/entities/bond_status.entity';
import { College } from 'src/university/entities/university.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VerificationService {

constructor( 
@InjectRepository(College, 'university')
private readonly universtiyDbRepository: Repository<College>,

@InjectRepository(BondStatus,'bond' )
private readonly bondstatusRepository: Repository<BondStatus>,
){}

async verifystudentBonding (Regnumber: string): Promise<string>{
const student = await this.universtiyDbRepository.findOneBy({Regnumber: Regnumber});
if(!student){
  return 'student registration number not found in the university database';
}
const bondingstatus = await this.bondstatusRepository.findOneBy({Regnumber});
if(bondingstatus?.activeStatus){
return `student ${student.fullname} is eligible to proceed bonding`
}
else{
  return `student ${student.fullname} is not eligible to bond`
}
}

}
