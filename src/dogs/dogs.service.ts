import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Dog } from './interfaces/dog.interface';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(dogDto: CreateDogDto): Dog {
    const { name, age, breed } = dogDto;
    const dog: Dog = {
      id: uuidv4(),
      name,
      age,
      breed,
    };

    this.dogs.push(dog);
    return dog;
  }

  getAll(): Dog[] {
    return this.dogs;
  }

  getById(id: string): Dog {
    return this.dogs.find(dog => dog.id === id);
  }
}
