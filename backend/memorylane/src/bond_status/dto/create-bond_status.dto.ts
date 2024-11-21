import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateBondStatusDto {
    @IsNotEmpty()
    @IsString()
    Regnumber: string

    @IsNotEmpty()
    @IsBoolean()
    activeStatus: boolean
}
