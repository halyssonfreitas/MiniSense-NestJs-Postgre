import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SensorDeviceModule } from './sensor-device/sensor-device.module';

@Module({
  imports: [UserModule, SensorDeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
