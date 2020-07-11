import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  getAll(): string {
    return 'This action return all cats';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `This actions adds a new cat, ${createCatDto.name}`;
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return `Cat: ${id}`;
  }
}
