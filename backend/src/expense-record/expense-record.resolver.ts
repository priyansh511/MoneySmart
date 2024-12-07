import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpenseRecordService } from './expense-record.service';
import { ExpenseRecord } from './entities/expense-record.entity';
import { CreateExpenseRecordInput } from './dto/create-expense-record.input';
import { UpdateExpenseRecordInput } from './dto/update-expense-record.input';

@Resolver(() => ExpenseRecord)
export class ExpenseRecordResolver {
  constructor(private readonly expenseRecordService: ExpenseRecordService) {}

  @Mutation(() => ExpenseRecord)
  async createExpenseRecord(@Args('createExpenseRecordInput') createExpenseRecordInput: CreateExpenseRecordInput) {
    return await this.expenseRecordService.create(createExpenseRecordInput);
  }

  @Query(() => [ExpenseRecord], { name: 'expenseRecords' })
  async findAll() {
    return await this.expenseRecordService.findAll();
  }

  @Query(() => ExpenseRecord, { name: 'expenseRecord' })
  async findOne(@Args('id', { type: () => String }) id: string) : Promise<ExpenseRecord>  {
    const result = await this.expenseRecordService.findById(id);
    return result;
  }

  @Mutation(() => ExpenseRecord)
  async updateExpenseRecord(@Args('updateExpenseRecordInput') updateExpenseRecordInput: UpdateExpenseRecordInput) {
    return await this.expenseRecordService.update(updateExpenseRecordInput.id, updateExpenseRecordInput);
  }

  @Mutation(() => ExpenseRecord)
  async removeExpenseRecord(@Args('id', { type: () => Int }) id: number) {
    return await this.expenseRecordService.delete(id);
  }
}
