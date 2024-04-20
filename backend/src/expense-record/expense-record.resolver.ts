import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpenseRecordService } from './expense-record.service';
import { ExpenseRecord } from './entities/expense-record.entity';
import { CreateExpenseRecordInput } from './dto/create-expense-record.input';
import { UpdateExpenseRecordInput } from './dto/update-expense-record.input';

@Resolver(() => ExpenseRecord)
export class ExpenseRecordResolver {
  constructor(private readonly expenseRecordService: ExpenseRecordService) {}

  @Mutation(() => ExpenseRecord)
  createExpenseRecord(@Args('createExpenseRecordInput') createExpenseRecordInput: CreateExpenseRecordInput) {
    return this.expenseRecordService.create(createExpenseRecordInput);
  }

  @Query(() => [ExpenseRecord], { name: 'expenseRecords' })
  async findAll() {
    return await this.expenseRecordService.findAll();
  }

  @Query(() => ExpenseRecord, { name: 'expenseRecord' })
  findOne(@Args('id', { type: () => String }) id: string) {
    const result = this.expenseRecordService.findById(id);
    return result;
  }

  @Mutation(() => ExpenseRecord)
  updateExpenseRecord(@Args('updateExpenseRecordInput') updateExpenseRecordInput: UpdateExpenseRecordInput) {
    return this.expenseRecordService.update(updateExpenseRecordInput.id, updateExpenseRecordInput);
  }

  @Mutation(() => ExpenseRecord)
  removeExpenseRecord(@Args('id', { type: () => Int }) id: number) {
    return this.expenseRecordService.delete(id);
  }
}
