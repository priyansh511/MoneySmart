import { Injectable } from '@nestjs/common';
import { CreateExpenseRecordInput } from './dto/create-expense-record.input';
import { UpdateExpenseRecordInput } from './dto/update-expense-record.input';
import { BaseRecordService } from '../base-record/base-record.service';
import { ExpenseRecord } from './entities/expense-record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ExpenseRecordService extends BaseRecordService<ExpenseRecord> {
  constructor(
    @InjectRepository(ExpenseRecord)
    private readonly expenseRepository: Repository<ExpenseRecord>,
  ) {
    super(expenseRepository);
  }
  create(createExpenseRecordInput: CreateExpenseRecordInput) {
    const newExpenseRecord = new ExpenseRecord();
    Object.assign(newExpenseRecord, createExpenseRecordInput);
    newExpenseRecord.id = uuidv4();
    newExpenseRecord.date = new Date(createExpenseRecordInput.date);
    return this.expenseRepository.save(newExpenseRecord);
  }

  async update(id: string, updateExpenseRecordInput: UpdateExpenseRecordInput) : Promise<ExpenseRecord> {
    const entity = await this.expenseRepository.findOneOrFail({ where: { id }});
    const updatedRecord = Object.assign(entity, updateExpenseRecordInput) as ExpenseRecord;
    this.expenseRepository.save(updatedRecord);
    return updatedRecord;
  }
}

