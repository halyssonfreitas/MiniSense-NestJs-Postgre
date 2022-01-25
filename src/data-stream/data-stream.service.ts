import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorDeviceService } from 'src/sensor-device/sensor-device.service';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateDataStreamDto } from './dto/create-data-stream.dto';
import { UpdateDataStreamDto } from './dto/update-data-stream.dto';
import { DataStream } from './entities/data-stream.entity';

@Injectable()
export class DataStreamService {

  constructor(
    @InjectRepository(DataStream) private dataStreamRepository : Repository<DataStream>,
    private readonly sensorDeviceService : SensorDeviceService
  ) { }

  async create(createDataStreamDto: CreateDataStreamDto, keyOfSensorDevice) {
    const sensorDevice = await this.sensorDeviceService.findOneByKey(keyOfSensorDevice)
    if (!sensorDevice) {
      throw new HttpException("Gived Key SensorDevice doens't exists", HttpStatus.BAD_REQUEST)
    }

    createDataStreamDto.id = uuid()
    createDataStreamDto.key = uuid()
    createDataStreamDto.sensorDevice = sensorDevice

    return this.dataStreamRepository.save(createDataStreamDto);
  }

  findAll() {
    return `This action returns all dataStream`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataStream`;
  }

  update(id: number, updateDataStreamDto: UpdateDataStreamDto) {
    return `This action updates a #${id} dataStream`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataStream`;
  }
}
