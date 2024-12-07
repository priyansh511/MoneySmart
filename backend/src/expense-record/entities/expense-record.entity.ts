import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseRecord } from 'src/base-record/entities/base-record.entity';


@Entity()
@ObjectType()
export class ExpenseRecord extends BaseRecord {
    
    // identifies where the money was spent
    // ex - zomato, amazon etc
    @Column('text', { nullable: true })
    @Field(() => String, { nullable: true })
    platform?: string;

    // upi, credit card etc
    @Column('text', { nullable: true })
    @Field(() => String, { nullable: true })
    mode_of_pay?: string;

    // gpay, paytm etc
    @Column('text', { nullable: true })
    @Field(() => String, { nullable: true })
    payment_service?: string;
}
