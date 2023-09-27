import { User } from './entities/user.entity';
import { Entity } from 'typeorm';
import { Topic } from './entities/topic.entity';
import { Module, Controller } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { TopicService } from './services/topic.service';
import { UserController } from './services/user.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023',
      synchronize: true,
      entities: {User, Topic}
    }),
    TypeOrmModule.forFeature([User, Topic])
  ],
  controllers: [AppController, ProfileController, UserController, TopicController],
  providers: [AppService, ProfileService, UserService, TopicService],
})
export class AppModule {}
