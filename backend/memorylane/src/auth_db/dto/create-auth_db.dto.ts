import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateAuthDbDto {
  
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsString()
  RegNumber: string;

  @IsNotEmpty()
  @IsEmail() 
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
