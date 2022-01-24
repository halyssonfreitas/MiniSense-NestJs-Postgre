import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorDeviceService } from './sensor-device.service';
import { CreateSensorDeviceDto } from './dto/create-sensor-device.dto';
import { UpdateSensorDeviceDto } from './dto/update-sensor-device.dto';

@Controller('sensor-device')
export class SensorDeviceController {
  constructor(private readonly sensorDeviceService: SensorDeviceService) {}

  @Post()
  create(@Body() createSensorDeviceDto: CreateSensorDeviceDto) {
    return this.sensorDeviceService.create(createSensorDeviceDto);
  }

  @Get()
  findAll() {
    return this.sensorDeviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorDeviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensorDeviceDto: UpdateSensorDeviceDto) {
    return this.sensorDeviceService.update(+id, updateSensorDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorDeviceService.remove(+id);
  }
}
