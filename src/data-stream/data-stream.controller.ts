import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { DataStreamService } from './data-stream.service';
import { CreateDataStreamDto } from './dto/create-data-stream.dto';
import { UpdateDataStreamDto } from './dto/update-data-stream.dto';

@Controller('data-stream')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Data Stream')
export class DataStreamController {
  constructor(private readonly dataStreamService: DataStreamService) {}

  @Post(':key')
  create(
    @Body() createDataStreamDto: CreateDataStreamDto,
    @Param('key') keyOfSensorDevice: string
    ) {
    console.log("DataStreamController - create()")
    return this.dataStreamService.create(createDataStreamDto, keyOfSensorDevice);
  }

  @Get()
  findAll() {
    return this.dataStreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataStreamService.findOne(id);
  }

  @Get('by-key/:key')
  findOneByKey(@Param('key') key: string) {
    return this.dataStreamService.findOneByKeyRoute(key);
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
