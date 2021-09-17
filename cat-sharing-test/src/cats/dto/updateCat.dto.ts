import { IsNotEmpty } from 'class-validator';

export class UpdateCatDto {

  @IsNotEmpty()
  isBooked: boolean;
}