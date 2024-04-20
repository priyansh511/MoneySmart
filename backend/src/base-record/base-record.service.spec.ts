import { Test, TestingModule } from '@nestjs/testing';
import { BaseRecordService } from './base-record.service';
import { BaseRecord } from './entities/base-record.entity';

describe('BaseRecordService', () => {
  let service: BaseRecordService<BaseRecord>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseRecordService],
    }).compile();

    service = module.get<BaseRecordService<BaseRecord>>(BaseRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
