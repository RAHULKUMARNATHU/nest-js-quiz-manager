import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private QuizRepo: Repository<Quiz>) {}

  create(createQuizDto: CreateQuizDto) {
    return this.QuizRepo.save(createQuizDto);
    // return 'This action adds a new quiz';
  }

  // getQuizById(id: number) {
  //   //  return await this.QuizRepo.findOne({where:{id}});
  //   console.log('here');
  // }
  findAll() {
    return `This action returns all quiz`;
  }

  async findOne(id: number) {
    return await this.QuizRepo.findOne({
      where: { id },
      relations: ['questions'],
    });
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
