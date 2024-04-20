import { ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { BaseRecord } from 'src/base-record/entities/base-record.entity';


@Entity()
@ObjectType()
export class ExpenseRecord extends BaseRecord {
  
}
