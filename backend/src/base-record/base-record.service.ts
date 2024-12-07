import { Injectable } from '@nestjs/common';
import { BaseRecord } from './entities/base-record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class BaseRecordService<T extends BaseRecord>{
    constructor(
        @InjectRepository(BaseRecord)
        private readonly repository: Repository<T>
    ) { }

    async findAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<T> {
        const result = await this.repository.findOneBy({id} as FindOptionsWhere<T> );
        if(!result) {
            //TODO:throw exception
        }
        //not handling result count>0 as it will be handled by primary key constraint
        return result;
      }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findByCategory(category: string): Promise<T[]> {
        return await this.repository.find({ where: { category } as FindOptionsWhere<T> });
    }
}
