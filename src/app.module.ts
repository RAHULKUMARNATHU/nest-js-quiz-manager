import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeOrm.config';
import { QuizModule } from './module/quiz/quiz.module';
import { QuestionsModule } from './module/questions/questions.module';

@Module({
  imports: [QuizModule , TypeOrmModule.forRoot(
    typeOrmConfig
  ), QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
