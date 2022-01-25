import { Module } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { SensorDataController } from './sensor-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorData } from './entities/sensor-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SensorData])],
  controllers: [SensorDataController],
  providers: [SensorDataService]
})
export class SensorDataModule {}
