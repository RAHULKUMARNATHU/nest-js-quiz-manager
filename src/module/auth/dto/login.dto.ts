import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  
  @IsNotEmpty()
  @IsEmail()
  username: string;

  
  @IsNotEmpty()
  password: string;
}