import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateExpenseRecordInput {

  @Field(()=> Date)
  date : Date


  @Field(() => String)
  category : string


  @Field(() => Int)
  amount : number


  @Field(() => String)
  notes : string
}
