import { IsNotEmpty, IsIn } from 'class-validator';
import { Breed } from '../interfaces/dog.interface';

export class CreateDogDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsIn([Breed.Bulldog, Breed.Labrador, Breed.Pug])
  breed: Breed;
}
