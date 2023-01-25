import { Injectable, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
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

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.QuizRepo.createQueryBuilder('q')
      // .leftJoinAndSelect(Question, 'qt', 'q.id = qt.quizId')
      .leftJoinAndSelect('q.questions', 'qt')
      // .leftJoinAndSelect('qt.options', 'o')
      // .take(1)
      // .getManyAndCount();
      .getMany();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
    const qb = this.QuizRepo.createQueryBuilder('q');
    qb.orderBy('q.id', 'DESC');
    return paginate<Quiz>(qb, options);
  }

  async getQuizById(id: number) {
    const quiz = await this.QuizRepo.findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
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
