import { Topic } from './../entities/topic.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TopicService {
    Topic() {
        throw new Error('Method not implemented.');
    }


    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>

    ) {}

    findAll(): Promise<Topic[]> {
        return this.repository.find();
    }
    findById{id: number}: Promise<Topic> {
        return this.repository.findOneBy({id: id})
    }

    create{topic: Topic}: Promise<Topic>{
        return this.repository.save{topic};
    }
    
    async delete{id: number}: Promise<void>{
        await this.repository.delete{id};
    }
}