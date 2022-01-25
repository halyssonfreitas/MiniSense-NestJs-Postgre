import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uuid } from 'uuidv4';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateSensorDeviceDto } from './dto/create-sensor-device.dto';
import { UpdateSensorDeviceDto } from './dto/update-sensor-device.dto';
import { SensorDevice } from './entities/sensor-device.entity';
import { returnSensorDeviceDto_forCreate, returnSensorDeviceDto_forFindAllByUser, returnSensorDeviceDto_forFindOneByKeyRoute } from './dto/return-sensor-device.dto';
import { DataStreamService } from 'src/data-stream/data-stream.service';

@Injectable()
export class SensorDeviceService {

  constructor(
    @InjectRepository(SensorDevice) private sensorDeviceRepository: Repository<SensorDevice>,
    private readonly userService: UserService,
    @Inject(forwardRef(() => DataStreamService))
    private readonly dataStreamService: DataStreamService
  ) { }

  async create(
    createSensorDeviceDto: CreateSensorDeviceDto,
    user: any) {
    let userObj
    try {
      // More one step of validation.
      // Verify if user exists
      userObj = await this.userService.findOne(user.userId)
    } catch (error) {
      throw new HttpException("BadRequest", HttpStatus.BAD_REQUEST)
    }

    createSensorDeviceDto.id = uuid()
    createSensorDeviceDto.key = uuid()
    createSensorDeviceDto.user = userObj

    this.sensorDeviceRepository.save(createSensorDeviceDto)
      .catch(() => { throw new HttpException("This was not saved, please, try again!", HttpStatus.EXPECTATION_FAILED) })

    return returnSensorDeviceDto_forCreate(createSensorDeviceDto)
  }

  findAll() {

    return this.sensorDeviceRepository.find({
      select: ["id", "key", "label", "description", "user"],
      relations: ['user']
    });
  }

  findOne(id: string) {
    return this.sensorDeviceRepository.findOne({
      where: {
        id: id
      },
      relations: ['user']
    });
  }

  findOneByKey(key: string) {
    return this.sensorDeviceRepository.findOne({
      where: {
        key: key
      },
    });
  }

  async findOneByKeyRoute(key: string) {
    const sensorDevice = await this.sensorDeviceRepository.findOne({
      where: {
        key: key
      },
      relations: ['dataStream']
    });

    // Getting all information of dataStrem
    // This is like a relation of relation in find
    for (let i = 0; i < sensorDevice.dataStream.length; i++) {
      sensorDevice.dataStream[i] = await this.dataStreamService.findOne(sensorDevice.dataStream[i].id)
    }
    console.log(sensorDevice.dataStream[0].sensorData)


    return returnSensorDeviceDto_forFindOneByKeyRoute(sensorDevice)
  }

  async findAllByUser(user: any) {
    var sensorDeviceListByUser = await this.sensorDeviceRepository.find({
      select: ["id", "key", "label", "description", "user"],
      where: [
        { user: user.userId },
      ],
      relations: ['dataStream']
    })

    // Getting all information of dataStrem
    // This is like a relation of relation in find
    for (let i = 0; i < sensorDeviceListByUser.length; i++) {
      for (let j = 0; j < sensorDeviceListByUser[i].dataStream.length; j++) {
        sensorDeviceListByUser[i].dataStream[j] = await this.dataStreamService.findOne(sensorDeviceListByUser[i].dataStream[j].id)
      }
    }

    return returnSensorDeviceDto_forFindAllByUser(sensorDeviceListByUser);
  }

  update(id: string, updateSensorDeviceDto: UpdateSensorDeviceDto) {
    return `This action updates a #${id} sensorDevice`;
  }

  remove(id: string) {
    return `This action removes a #${id} sensorDevice`;
  }
}
