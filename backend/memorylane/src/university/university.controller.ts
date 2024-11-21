import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post('/add')
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @Get()
  findAll() {
    return this.universityService.findAll();
  }

  @Get('/findone:Regnumber')
  findOne(@Param('Regno') Regno: string) {
    return this.universityService.findoneby(Regno);
  }

  @Patch('update/:Regnumber')
  update(@Param('Regnumber') Regnumber: string, @Body() updateUniversityDto: UpdateUniversityDto) {
    return this.universityService.update(Regnumber, updateUniversityDto);
  }

  @Delete('/remove:Regnumber')
  remove(@Param('Regnumber') Regnumber: string) {
    return this.universityService.remove(Regnumber);
  }
}
