import { PartialType } from '@nestjs/mapped-types';
import { CreateLoansDbDto } from './create-loans_db.dto';

export class UpdateLoansDbDto extends PartialType(CreateLoansDbDto) {}
