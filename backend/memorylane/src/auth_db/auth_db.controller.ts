import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthDbService } from './auth_db.service';
import { CreateAuthDbDto } from './dto/create-auth_db.dto';
import { UpdateAuthDbDto } from './dto/update-auth_db.dto';

@Controller('auth')
export class AuthDbController {
  constructor(private readonly authDbService: AuthDbService) {}

  @Post('/create')
  create(@Body() createAuthDbDto: CreateAuthDbDto) {
    return this.authDbService.create(createAuthDbDto);
  }

  @Get()
  findAll() {
    return this.authDbService.findAll();
  }

  @Get('/findone/:RegNumber')
  findOne(@Param('RegNumber') RegNumber: string) {
    return this.authDbService.findOne(RegNumber);
  }

  @Patch('/update/:RegNumber')
  update(@Param('RegNumber') RegNumber: string, @Body() updateAuthDbDto: UpdateAuthDbDto) {
    return this.authDbService.update(RegNumber, updateAuthDbDto);
  }

  @Delete('delete/:RegNumber')
  remove(@Param('RegNumber') RegNumber: string) {
    return this.authDbService.remove(RegNumber);
  }
}
