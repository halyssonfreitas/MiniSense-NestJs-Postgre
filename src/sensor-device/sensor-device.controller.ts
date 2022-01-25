import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, HttpStatus, HttpException, Inject } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { SensorDeviceService } from './sensor-device.service';
import { CreateSensorDeviceDto } from './dto/create-sensor-device.dto';
import { UpdateSensorDeviceDto } from './dto/update-sensor-device.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('sensor-device')
@UseGuards(JwtAuthGuard)
export class SensorDeviceController {
  constructor(
    private readonly sensorDeviceService: SensorDeviceService,
  ) { }

  @Post()
  create(
    @Body() createSensorDeviceDto: CreateSensorDeviceDto,
    @Request() req
  ) {
    return this.sensorDeviceService.create(createSensorDeviceDto, req.user)
  }

  @Get()
  findAll() {
    return this.sensorDeviceService.findAll();
  }

  @Get('by-user')
  findAllByUser(@Request() req) {
    return this.sensorDeviceService.findAllByUser(req.user);
  }

  @Get('by-key/:key')
  findOneByKey(@Param('key') key: string) {
    return this.sensorDeviceService.findOneByKeyRoute(key);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorDeviceService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensorDeviceDto: UpdateSensorDeviceDto) {
    return this.sensorDeviceService.update(id, updateSensorDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorDeviceService.remove(id);
  }
}
