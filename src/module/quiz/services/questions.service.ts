import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
  ) {}

  async create(
    createQuestionDto: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepo.save({
      question: createQuestionDto.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
    // return 'This action adds a new question';
  }

  findAll() {
    return `This action returns all questions`;
  }

  async findQuestionById(id: number) {
    return await this.questionRepo.findOne({
      where: { id },
      relations: ['quiz', 'options'],
    });
  }

  // update(id: number, updateQuestionDto: UpdateQuestionDto) {
  //   return `This action updates a #${id} question`;
  // }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
