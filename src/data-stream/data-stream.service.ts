import { Injectable } from '@nestjs/common';
import { CreateDataStreamDto } from './dto/create-data-stream.dto';
import { UpdateDataStreamDto } from './dto/update-data-stream.dto';

@Injectable()
export class DataStreamService {
  create(createDataStreamDto: CreateDataStreamDto) {
    return 'This action adds a new dataStream';
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
