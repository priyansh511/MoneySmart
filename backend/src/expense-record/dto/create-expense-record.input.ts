import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateExpenseRecordInput {

  @Field(()=> Date)
  date : Date

  @Field(() => String)
  name : string


  @Field(() => String)
  category : string


  @Field(() => Int)
  amount : number


  @Field(() => String)
  notes : string


  @Field(() => String, { nullable: true })
  platform?: string;

  
  @Field(() => String, { nullable: true })
  mode_of_pay?: string;


  @Field(() => String, { nullable: true })
  payment_service?: string;

}
