import { Injectable } from '@nestjs/common';
import { CreateSensorDeviceDto } from './dto/create-sensor-device.dto';
import { UpdateSensorDeviceDto } from './dto/update-sensor-device.dto';

@Injectable()
export class SensorDeviceService {
  create(createSensorDeviceDto: CreateSensorDeviceDto) {
    return 'This action adds a new sensorDevice';
  }

  findAll() {
    return `This action returns all sensorDevice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensorDevice`;
  }

  update(id: number, updateSensorDeviceDto: UpdateSensorDeviceDto) {
    return `This action updates a #${id} sensorDevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensorDevice`;
  }
}
