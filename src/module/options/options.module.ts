import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';
import { QuestionsModule } from '../questions/questions.module';
import { Question } from '../questions/entities/question.entity';
import { QuestionsService } from '../questions/questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option, Question]), QuestionsModule],
  controllers: [OptionsController],
  providers: [OptionsService, QuestionsService],
})
export class OptionsModule {}
