import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDbDto } from './create-auth_db.dto';

export class UpdateAuthDbDto extends PartialType(CreateAuthDbDto) {}
