import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SensorDeviceModule } from './sensor-device/sensor-device.module';
import { DataStreamModule } from './data-stream/data-stream.module';
import { MeasurementUnitModule } from './measurement-unit/measurement-unit.module';
import { SensorDataModule } from './sensor-data/sensor-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    SensorDeviceModule,
    DataStreamModule,
    MeasurementUnitModule,
    SensorDataModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
