import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseRecordModule } from './expense-record/expense-record.module';
import { BaseRecordModule } from './base-record/base-record.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ExpenseRecordModule,
    BaseRecordModule,

    // graphQL dependencies
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver
    }),

    //typeORM dependencies
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: ['dist/**/entities/**.entity{.ts,.js}'],
      synchronize: true, //TODO: use migrations instead 
    })
  ],
})
export class AppModule { }
