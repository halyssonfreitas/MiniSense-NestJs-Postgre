import { forwardRef, Module } from '@nestjs/common';
import { SensorDeviceService } from './sensor-device.service';
import { SensorDeviceController } from './sensor-device.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorDevice } from './entities/sensor-device.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([SensorDevice])],
  controllers: [SensorDeviceController],
  providers: [SensorDeviceService],
  exports: [SensorDeviceService]
})
export class SensorDeviceModule {}
