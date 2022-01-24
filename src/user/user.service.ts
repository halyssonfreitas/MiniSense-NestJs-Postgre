import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorDeviceService } from 'src/sensor-device/sensor-device.service';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository : Repository<User>
  ) { }

  create(createUserDto: CreateUserDto) {
    createUserDto.id = uuid()
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({id: id});
  }

  findOneByUserName(username: string) {
    return this.userRepository.findOne({username: username});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
