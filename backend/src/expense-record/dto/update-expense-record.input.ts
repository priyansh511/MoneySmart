import { CreateExpenseRecordInput } from './create-expense-record.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateExpenseRecordInput extends PartialType(CreateExpenseRecordInput) {

  @Field(() => ID)
  id : string

  @Field(()=> Date)
  date : Date


  @Field(() => String)
  category : string


  @Field(() => Int)
  amount : number


  @Field(() => String)
  notes : string
}
