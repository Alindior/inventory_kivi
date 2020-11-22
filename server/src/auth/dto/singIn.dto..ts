import { IsEmail, IsNotEmpty } from 'class-validator';

export class SingInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
