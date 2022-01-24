import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataStreamService } from './data-stream.service';
import { CreateDataStreamDto } from './dto/create-data-stream.dto';
import { UpdateDataStreamDto } from './dto/update-data-stream.dto';

@Controller('data-stream')
export class DataStreamController {
  constructor(private readonly dataStreamService: DataStreamService) {}

  @Post()
  create(@Body() createDataStreamDto: CreateDataStreamDto) {
    return this.dataStreamService.create(createDataStreamDto);
  }

  @Get()
  findAll() {
    return this.dataStreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataStreamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataStreamDto: UpdateDataStreamDto) {
    return this.dataStreamService.update(+id, updateDataStreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataStreamService.remove(+id);
  }
}
