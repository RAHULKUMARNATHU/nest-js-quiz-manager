import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuizService } from '../quiz/quiz.service';

@Controller('questions')
export class QuestionsController {
  constructor(
    // @Inject(forwardRef(() => QuestionsService))
    private quizService: QuizService,

    private readonly questionsService: QuestionsService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post('/create-question')
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    console.log(createQuestionDto.quizId);

    const quiz = await this.quizService.findOne(createQuestionDto.quizId);
    // console.log(quiz);
    if (quiz) {
      return await this.questionsService.create(createQuestionDto, quiz);
    }
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.questionsService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
