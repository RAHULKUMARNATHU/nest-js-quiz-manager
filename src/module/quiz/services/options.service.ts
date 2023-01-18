import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Options } from '../entities/option.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Options) private optionRepository: Repository<Options>,
  ) {}

  async create(option: CreateOptionDto, question: Question) {
    // return 'This action adds a new option';
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [newOption, ...question.options];
    await question.save();
    return newOption;
  }

  findAll() {
    return `This action returns all options`;
  }

  findOne(id: number) {
    return `This action returns a #${id} option`;
  }

  // update(id: number, updateOptionDto: UpdateOptionDto) {
  //   return `This action updates a #${id} option`;
  // }

  remove(id: number) {
    return `This action removes a #${id} option`;
  }
}
