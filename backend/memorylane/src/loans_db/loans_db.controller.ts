import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoansDbService } from './loans_db.service';
import { CreateLoansDbDto } from './dto/create-loans_db.dto';
import { UpdateLoansDbDto } from './dto/update-loans_db.dto';

@Controller('loans-db')
export class LoansDbController {
  constructor(private readonly loansDbService: LoansDbService) {}

  @Post()
  create(@Body() createLoansDbDto: CreateLoansDbDto) {
    return this.loansDbService.create(createLoansDbDto);
  }

  @Get()
  findAll() {
    return this.loansDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loansDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoansDbDto: UpdateLoansDbDto) {
    return this.loansDbService.update(+id, updateLoansDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loansDbService.remove(+id);
  }
}
