import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async getAll(): Promise<Cat[]> {
    return this.catsService.getAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return this.catsService.create(createCatDto);
  }
}
