import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeasurementUnit } from 'src/measurement-unit/entities/measurement-unit.entity';
import { MeasurementUnitService } from 'src/measurement-unit/measurement-unit.service';
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
    private readonly sensorDeviceService : SensorDeviceService,
    private readonly measurementUnitService : MeasurementUnitService
  ) { }

  async create(createDataStreamDto: CreateDataStreamDto, keyOfSensorDevice) {
    const sensorDevice = await this.sensorDeviceService.findOneByKey(keyOfSensorDevice)
    if (!sensorDevice) {
      throw new HttpException("Gived Key for SensorDevice doens't exists", HttpStatus.BAD_REQUEST)
    }

    const measurementUnit = await this.measurementUnitService.findOne(createDataStreamDto.unitId)
    if (!measurementUnit) {
      throw new HttpException("Gived Id for Measurement Unit doens't exists", HttpStatus.BAD_REQUEST)
    }

    createDataStreamDto.id = uuid()
    createDataStreamDto.key = uuid()
    createDataStreamDto.sensorDevice = sensorDevice.id
    createDataStreamDto.unitId = measurementUnit.id

    console.log(createDataStreamDto)

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
