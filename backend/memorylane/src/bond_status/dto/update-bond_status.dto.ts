import { PartialType } from '@nestjs/mapped-types';
import { CreateBondStatusDto } from './create-bond_status.dto';

export class UpdateBondStatusDto extends PartialType(CreateBondStatusDto) {}
