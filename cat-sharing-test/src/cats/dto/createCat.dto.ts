import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCatDto {

  @IsNotEmpty({message: "Should have a name"})
  name: string;


  breed: string;

  @IsNotEmpty({message: "Should have an age"})
  age: number;

  @IsNotEmpty({message: "Should have a price"})
  @IsNumberString()
  price: number;

  isBooked: boolean;
}