import { Injectable } from '@nestjs/common';
import { User } from './../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {


    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>

    ) {}

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

}