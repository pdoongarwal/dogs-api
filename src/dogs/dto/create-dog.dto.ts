import { Breed } from '../interfaces/dog.interface';

export class CreateDogDto {
  name: string;
  age: number;
  breed: Breed;
}
