import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLoansDbDto {
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNotEmpty()
    @IsString()
    personalDetails: string

    @IsNotEmpty()
    @IsString()
    parentDetails: string

    @IsNotEmpty()
    @IsString()
    loanAmount: string

    @IsNotEmpty()
    @IsString()
    bankDetails: string

}
