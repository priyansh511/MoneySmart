import { Module } from '@nestjs/common';
import { ExpenseRecordService } from './expense-record.service';
import { ExpenseRecordResolver } from './expense-record.resolver';
import { ExpenseRecord } from './entities/expense-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseRecord } from 'src/base-record/entities/base-record.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExpenseRecord]),
    BaseRecord
    ],
  providers: [ExpenseRecordResolver, ExpenseRecordService],
})

export class ExpenseRecordModule {}
