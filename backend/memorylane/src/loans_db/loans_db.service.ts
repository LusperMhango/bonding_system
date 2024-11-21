import { Injectable } from '@nestjs/common';
import { CreateLoansDbDto } from './dto/create-loans_db.dto';
import { UpdateLoansDbDto } from './dto/update-loans_db.dto';

@Injectable()
export class LoansDbService {
  create(createLoansDbDto: CreateLoansDbDto) {
    return 'This action adds a new loansDb';
  }

  findAll() {
    return `This action returns all loansDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loansDb`;
  }

  update(id: number, updateLoansDbDto: UpdateLoansDbDto) {
    return `This action updates a #${id} loansDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} loansDb`;
  }
}
