import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Topic } from './../entities/topic.entity';
import { TopicService } from "src/services/topic.service";

@Controller("topic")

export class topicController{
    constructor(private service: TopicService){}
    @Get(':id')
    findAll(){
        return this.service.Topic();
    }
    @Post()
    create(@Body)()
}


