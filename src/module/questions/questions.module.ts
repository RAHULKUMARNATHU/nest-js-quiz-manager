import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
// import { QuizModule } from '../quiz/quiz.module';
import { QuizService } from '../quiz/quiz.service';
import { QuizController } from '../quiz/quiz.controller';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizModule } from '../quiz/quiz.module';
import { Options } from '../options/entities/option.entity';

@Module({
  imports:[QuizModule ,TypeOrmModule.forFeature([Question , Quiz , Options ]) , ],
  controllers: [QuestionsController ],
  providers: [QuestionsService , QuizService],
  // exports:[QuestionsService , QuizService ]
})
export class QuestionsModule {}
