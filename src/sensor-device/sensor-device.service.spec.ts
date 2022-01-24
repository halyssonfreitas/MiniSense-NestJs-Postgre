import { Test, TestingModule } from '@nestjs/testing';
import { SensorDeviceService } from './sensor-device.service';

describe('SensorDeviceService', () => {
  let service: SensorDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorDeviceService],
    }).compile();

    service = module.get<SensorDeviceService>(SensorDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
