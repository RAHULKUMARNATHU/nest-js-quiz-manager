import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeOrm.config';
import { QuizModule } from './module/quiz/quiz.module';

@Module({
  imports: [QuizModule , TypeOrmModule.forRoot(
    typeOrmConfig
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
