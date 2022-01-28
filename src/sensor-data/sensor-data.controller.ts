import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';
import { UpdateSensorDataDto } from './dto/update-sensor-data.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('sensor-data')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Sensor Data')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Post(':key')
  create(
    @Body() createSensorDatumDto: CreateSensorDataDto,
    @Param('key') keyOfDataStream : string
    ) {
    return this.sensorDataService.create(createSensorDatumDto, keyOfDataStream);
  }

  @Get()
  findAll() {
    return this.sensorDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensorDatumDto: UpdateSensorDataDto) {
    return this.sensorDataService.update(+id, updateSensorDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorDataService.remove(+id);
  }
}
