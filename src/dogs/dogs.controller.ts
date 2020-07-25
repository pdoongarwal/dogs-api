import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  getAll(): Dog[] {
    return this.dogsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): Dog {
    return this.dogsService.getById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDogDto: CreateDogDto): Dog {
    return this.dogsService.create(createDogDto);
  }
}
