import { Module } from '@nestjs/common';
import { BaseRecordService } from './base-record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseRecord } from './entities/base-record.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BaseRecord])],
    providers: [BaseRecordService],
    exports: [BaseRecordService]
})
export class BaseRecordModule { }
