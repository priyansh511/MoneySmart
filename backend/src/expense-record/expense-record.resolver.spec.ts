import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseRecordResolver } from './expense-record.resolver';
import { ExpenseRecordService } from './expense-record.service';

describe('ExpenseRecordResolver', () => {
  let resolver: ExpenseRecordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseRecordResolver, ExpenseRecordService],
    }).compile();

    resolver = module.get<ExpenseRecordResolver>(ExpenseRecordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
