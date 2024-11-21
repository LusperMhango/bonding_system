import { IsNotEmpty, IsString } from "class-validator";


export class CreateUniversityDto {
    @IsNotEmpty()
    @IsString()
    Regnumber: string;

    @IsNotEmpty()
    @IsString()
    fullname: string;

    
}
