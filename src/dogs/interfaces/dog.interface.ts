export interface Dog {
  id: string;
  name: string;
  age: number;
  breed: Breed;
}

export enum Breed {
  Labrador = 'Labrador',
  Pug = 'Pug',
  Bulldog = 'Bulldog',
}
