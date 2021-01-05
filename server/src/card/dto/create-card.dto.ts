import { IsNumber, IsString } from 'class-validator';

export class CreateCardDto {
  @IsString()
  name: string;

  @IsNumber()
  cost: number;

  isActive: boolean;
}
