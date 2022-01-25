import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataStreamService } from 'src/data-stream/data-stream.service';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';
import { returnSensorDataDto_forCreate } from './dto/return-sensor-data.dto';
import { UpdateSensorDataDto } from './dto/update-sensor-data.dto';
import { SensorData } from './entities/sensor-data.entity';

@Injectable()
export class SensorDataService {

  constructor(
    @InjectRepository(SensorData) private readonly sensorDataRepository : Repository<SensorData>,
    private readonly dataStreamService : DataStreamService
  ) { }

  async create(
    createSensorDataDto: CreateSensorDataDto,
    keyOfDataStream: string
  ) {
    const dataStream = await this.dataStreamService.findOneByKey(keyOfDataStream)
    if (!dataStream) {
      throw new HttpException("Gived Key for SensorDevice doens't exists", HttpStatus.BAD_REQUEST)
    }

    createSensorDataDto.id = uuid()
    createSensorDataDto.unitId = dataStream.unit
    createSensorDataDto.dataStream = dataStream.id

    this.sensorDataRepository.save(createSensorDataDto)
      .catch(() => { throw new HttpException("This was not saved, please, try again!", HttpStatus.EXPECTATION_FAILED) })

    return returnSensorDataDto_forCreate(createSensorDataDto);
  }

  findAll() {
    return this.sensorDataRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sensorDatum`;
  }

  update(id: number, updateSensorDatumDto: UpdateSensorDataDto) {
    return `This action updates a #${id} sensorDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensorDatum`;
  }
}
