import { Module } from '@nestjs/common';
import { SensorDeviceService } from './sensor-device.service';
import { SensorDeviceController } from './sensor-device.controller';

@Module({
  controllers: [SensorDeviceController],
  providers: [SensorDeviceService]
})
export class SensorDeviceModule {}
