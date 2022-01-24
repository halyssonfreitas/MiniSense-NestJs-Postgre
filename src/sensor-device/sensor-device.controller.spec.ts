import { Test, TestingModule } from '@nestjs/testing';
import { SensorDeviceController } from './sensor-device.controller';
import { SensorDeviceService } from './sensor-device.service';

describe('SensorDeviceController', () => {
  let controller: SensorDeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorDeviceController],
      providers: [SensorDeviceService],
    }).compile();

    controller = module.get<SensorDeviceController>(SensorDeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
