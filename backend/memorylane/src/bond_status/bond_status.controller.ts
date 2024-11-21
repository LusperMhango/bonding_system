import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BondStatusService } from './bond_status.service';
import { CreateBondStatusDto } from './dto/create-bond_status.dto';
import { UpdateBondStatusDto } from './dto/update-bond_status.dto';

@Controller('bond-status')
export class BondStatusController {
  constructor(private readonly bondStatusService: BondStatusService) {}

  @Post('/add')
  create(@Body() createBondStatusDto: CreateBondStatusDto) {
    return this.bondStatusService.create(createBondStatusDto);
  }

  @Get()
  findAll() {
    return this.bondStatusService.findAll();
  }

  @Patch('/update:Regnumber')
  update(@Param('Regnumber') Regnumber: string, @Body() updateBondStatusDto: UpdateBondStatusDto) {
    return this.bondStatusService.update(Regnumber, updateBondStatusDto);
  }

  @Delete('remove/:Regnumber')
  remove(@Param('Regnumber') Regnumber: string) {
    return this.bondStatusService.remove(Regnumber);
  }
}
