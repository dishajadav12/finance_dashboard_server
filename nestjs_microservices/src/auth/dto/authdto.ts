import { IsNotEmpty, IsString, IsEmail, Length, IsInt } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;

  @IsNotEmpty()
  @IsString()
  public occupation: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsInt()
  public anualIncome: number;

 
}
