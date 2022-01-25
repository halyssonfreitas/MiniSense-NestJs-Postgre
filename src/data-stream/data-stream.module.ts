import { Module } from '@nestjs/common';
import { DataStreamService } from './data-stream.service';
import { DataStreamController } from './data-stream.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataStream } from './entities/data-stream.entity';
import { SensorDeviceModule } from 'src/sensor-device/sensor-device.module';

@Module({
  imports: [TypeOrmModule.forFeature([DataStream]), SensorDeviceModule],
  controllers: [DataStreamController],
  providers: [DataStreamService]
})
export class DataStreamModule {}
