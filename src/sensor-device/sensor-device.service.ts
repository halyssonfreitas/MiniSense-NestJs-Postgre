import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uuid } from 'uuidv4';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateSensorDeviceDto } from './dto/create-sensor-device.dto';
import { UpdateSensorDeviceDto } from './dto/update-sensor-device.dto';
import { SensorDevice } from './entities/sensor-device.entity';

@Injectable()
export class SensorDeviceService {

  constructor(
    @InjectRepository(SensorDevice) private sensorDeviceRepository: Repository<SensorDevice>
  ) { }

  create(createSensorDeviceDto: CreateSensorDeviceDto) {
    createSensorDeviceDto.id = uuid()
    createSensorDeviceDto.key = uuid()
    return this.sensorDeviceRepository.save(createSensorDeviceDto);
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
