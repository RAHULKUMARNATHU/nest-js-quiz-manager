import { Injectable, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { UpdateQuizDto } from '../dto/update-quiz.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private QuizRepo: Repository<Quiz>) {}

  create(createQuizDto: CreateQuizDto) {
    return this.QuizRepo.save(createQuizDto);
  }

  async getAllQuiz() :Promise<[Quiz[], number]>{
    return await this.QuizRepo.createQueryBuilder('q')
      // .leftJoinAndSelect(Question, 'qt', 'q.id = qt.quizId')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .take(1)
      .getManyAndCount();
      
  }

  async getQuizById(id: number) {
    const quiz = await this.QuizRepo.findOne({
      where: { id },
      relations: ['questions' ,'questions.options'],
    });
    return quiz;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
