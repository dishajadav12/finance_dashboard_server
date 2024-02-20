
import { IsNotEmpty, IsString, IsEmail, Length, IsInt } from 'class-validator';

export class FinanceDto {

  @IsNotEmpty()
  @IsString()
  public category: string;

  @IsNotEmpty()
  @IsString()
  public fType: string;
  
  @IsNotEmpty()
  @IsInt()
  public transaction: number;

  @IsNotEmpty()
  @IsString()
  public userId: string; // Assuming userId is a string in your model
}
