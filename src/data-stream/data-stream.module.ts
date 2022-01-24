import { Module } from '@nestjs/common';
import { DataStreamService } from './data-stream.service';
import { DataStreamController } from './data-stream.controller';

@Module({
  controllers: [DataStreamController],
  providers: [DataStreamService]
})
export class DataStreamModule {}
