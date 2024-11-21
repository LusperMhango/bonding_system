import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoansDbService } from './loans_db.service';
import { CreateLoansDbDto } from './dto/create-loans_db.dto';
import { UpdateLoansDbDto } from './dto/update-loans_db.dto';

@Controller('loans')
export class LoansDbController {
  constructor(private readonly loansDbService: LoansDbService) {}

  @Post('/form')
  create(@Body() createLoansDbDto: CreateLoansDbDto) {
    return this.loansDbService.create(createLoansDbDto);
  }
  @Post('/application')
  createLoanApplication(@Body() applicationData: any) {
    const { personalDetails, parentDetails, bankDetails } = applicationData;
    return this.loansDbService.createLoanApplication({
      personalDetails,
      parentDetails,
      bankDetails,
    });
  }

  @Get()
  findAll() {
    return this.loansDbService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: number) {
    return this.loansDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoansDbDto: UpdateLoansDbDto) {
    return this.loansDbService.update(+id, updateLoansDbDto);
  }

  @Delete('one/:id')
  remove(@Param('id') id: number) {
    return this.loansDbService.remove(+id);
  }
}
