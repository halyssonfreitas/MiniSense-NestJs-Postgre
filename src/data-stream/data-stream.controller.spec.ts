import { Test, TestingModule } from '@nestjs/testing';
import { DataStreamController } from './data-stream.controller';
import { DataStreamService } from './data-stream.service';

describe('DataStreamController', () => {
  let controller: DataStreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataStreamController],
      providers: [DataStreamService],
    }).compile();

    controller = module.get<DataStreamController>(DataStreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
