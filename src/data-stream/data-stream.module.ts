import { forwardRef, Module } from '@nestjs/common';
import { DataStreamService } from './data-stream.service';
import { DataStreamController } from './data-stream.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataStream } from './entities/data-stream.entity';
import { SensorDeviceModule } from 'src/sensor-device/sensor-device.module';
import { MeasurementUnitModule } from 'src/measurement-unit/measurement-unit.module';

@Module({
  imports: [TypeOrmModule.forFeature([DataStream]), forwardRef(()=>SensorDeviceModule), MeasurementUnitModule],
  controllers: [DataStreamController],
  providers: [DataStreamService],
  exports: [DataStreamService]
})
export class DataStreamModule {}
