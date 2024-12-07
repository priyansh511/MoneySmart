import { ObjectType, Field, Int, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
export class BaseRecord {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id : string
  
  @Column('datetime')
  @Field(()=> GraphQLISODateTime)
  date : Date

  //full name
  @Column()
  @Field(() => String, {defaultValue : "temp"})
  name : string

  @Column()
  @Field(() => String)
  category : string

  @Column('integer')
  @Field(() => Int)
  amount : number
  
  //any additional notes
  @Column('text')
  @Field(() => String)
  notes : string
}
