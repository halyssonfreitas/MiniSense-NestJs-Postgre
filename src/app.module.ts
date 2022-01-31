import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SensorDeviceModule } from './sensor-device/sensor-device.module';
import { DataStreamModule } from './data-stream/data-stream.module';
import { MeasurementUnitModule } from './measurement-unit/measurement-unit.module';
import { SensorDataModule } from './sensor-data/sensor-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { Connection } from 'typeorm';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './util/roles/roles.guard';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { RolesModule } from './util/roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    SensorDeviceModule,
    DataStreamModule,
    MeasurementUnitModule,
    SensorDataModule,
    AuthModule,
    RolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      //.forRoutes({ path: 'cats', method: RequestMethod.ALL });
      .forRoutes('*')
  }
}
