import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuizController } from './controllers/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Options } from './entities/option.entity';
import { QuestionsController } from './controllers/questions.controller';
import { OptionsController } from './controllers/options.controller';
import { QuestionsService } from './services/questions.service';
import { OptionsService } from './services/options.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz , Question , Options])],
  controllers: [QuizController , QuestionsController , OptionsController],
  providers: [QuizService , QuestionsService , OptionsService],

})
export class QuizModule {}
