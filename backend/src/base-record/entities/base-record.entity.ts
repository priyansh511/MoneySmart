import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
export class BaseRecord {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id : string

  @Column('date')
  @Field(()=> Date)
  date : Date

  @Column()
  @Field(() => String)
  category : string

  @Column('integer')
  @Field(() => Int)
  amount : number

  @Column('text')
  @Field(() => String)
  notes : string
}
