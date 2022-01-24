import { Test, TestingModule } from '@nestjs/testing';
import { DataStreamService } from './data-stream.service';

describe('DataStreamService', () => {
  let service: DataStreamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataStreamService],
    }).compile();

    service = module.get<DataStreamService>(DataStreamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
