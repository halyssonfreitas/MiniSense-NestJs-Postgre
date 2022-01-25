import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uuid } from 'uuidv4';
import { UserService } from 'src/user/user.service';
import { getRepository, Repository } from 'typeorm';
import { CreateSensorDeviceDto } from './dto/create-sensor-device.dto';
import { UpdateSensorDeviceDto } from './dto/update-sensor-device.dto';
import { SensorDevice } from './entities/sensor-device.entity';

@Injectable()
export class SensorDeviceService {

  constructor(
    @InjectRepository(SensorDevice) private sensorDeviceRepository: Repository<SensorDevice>,
    private readonly userService: UserService
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

    return this.sensorDeviceRepository.save(createSensorDeviceDto);
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

  async findAllByUser(user: any) {
    console.log(user.userId)
    return await this.sensorDeviceRepository.find({
      select: ["id", "key", "label", "description", "user"],
      where: [
        { user: user.userId },
      ],
      //relations: ['user']
    })
  }

  update(id: number, updateSensorDeviceDto: UpdateSensorDeviceDto) {
    return `This action updates a #${id} sensorDevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensorDevice`;
  }
}
