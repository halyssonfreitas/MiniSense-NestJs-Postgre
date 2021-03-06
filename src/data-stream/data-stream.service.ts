import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeasurementUnitService } from 'src/measurement-unit/measurement-unit.service';
import { SensorDeviceService } from 'src/sensor-device/sensor-device.service';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateDataStreamDto } from './dto/create-data-stream.dto';
import { returnDataStreamDto_forCreate, returnDataStreamDto_forFindOneByKeyRoute } from './dto/return-data-stream.dto';
import { UpdateDataStreamDto } from './dto/update-data-stream.dto';
import { DataStream } from './entities/data-stream.entity';

@Injectable()
export class DataStreamService {

  constructor(
    @InjectRepository(DataStream) private dataStreamRepository : Repository<DataStream>,
    @Inject(forwardRef(() => SensorDeviceService))
    private readonly sensorDeviceService : SensorDeviceService,
    private readonly measurementUnitService : MeasurementUnitService
  ) { }

  async create(createDataStreamDto: CreateDataStreamDto, keyOfSensorDevice) {
    const sensorDevice = await this.sensorDeviceService.findOneByKey(keyOfSensorDevice)
    if (!sensorDevice) {
      throw new HttpException("Gived Key for SensorDevice doens't exists", HttpStatus.BAD_REQUEST)
    }

    const measurementUnit = await this.measurementUnitService.findOne(createDataStreamDto.unit)
    if (!measurementUnit) {
      throw new HttpException("Gived Id for Measurement Unit doens't exists", HttpStatus.BAD_REQUEST)
    }

    createDataStreamDto.id = uuid()
    createDataStreamDto.key = uuid()
    createDataStreamDto.sensorDevice = sensorDevice.id
    createDataStreamDto.unit = measurementUnit.id

    this.dataStreamRepository.save(createDataStreamDto)
    .catch(() => { throw new HttpException("This was not saved, please, try again!", HttpStatus.EXPECTATION_FAILED) })

    return returnDataStreamDto_forCreate(createDataStreamDto);
  }

  findAll() {
    return this.dataStreamRepository.find();
  }

  findOne(id: string) {
    return this.dataStreamRepository.findOne({
      where : {id},
      relations : ['unit', 'sensorData']
    });
  }

  findOneByKey(key: string) {
    return this.dataStreamRepository.findOne({
      where : {
        key
      },
      relations : ['unit']
    });
  }

  async findOneByKeyRoute(key: string) {
    const dataStream = await this.dataStreamRepository.findOne({
      where : {
        key
      },
      relations : ['sensorData', 'sensorDevice', 'unit']
    });
    return returnDataStreamDto_forFindOneByKeyRoute(dataStream)
  }

  update(id: number, updateDataStreamDto: UpdateDataStreamDto) {
    return `This action updates a #${id} dataStream`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataStream`;
  }
}
