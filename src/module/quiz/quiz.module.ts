import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]) ],
  controllers: [QuizController ],
  providers: [QuizService ],
  // exports: [QuizService],
})
export class QuizModule {}
