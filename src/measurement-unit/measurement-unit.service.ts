import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateMeasurementUnitDto } from './dto/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from './dto/update-measurement-unit.dto';
import { MeasurementUnit } from './entities/measurement-unit.entity';

@Injectable()
export class MeasurementUnitService {

  constructor(
    @InjectRepository(MeasurementUnit) private readonly measurementUnitRepository : Repository<MeasurementUnit>
  ) {}

  async create(createMeasurementUnitDto: CreateMeasurementUnitDto) {
    createMeasurementUnitDto.id = uuid()
    return await this.measurementUnitRepository.save(createMeasurementUnitDto);
  }

  findAll() {
    return this.measurementUnitRepository.find();
  }

  findOne(id: string) {
    return this.measurementUnitRepository.findOne({
      where: {
        id: id
      },
    });
  }

  update(id: string, updateMeasurementUnitDto: UpdateMeasurementUnitDto) {
    return `This action updates a #${id} measurementUnit`;
  }

  remove(id: string) {
    return `This action removes a #${id} measurementUnit`;
  }
}
