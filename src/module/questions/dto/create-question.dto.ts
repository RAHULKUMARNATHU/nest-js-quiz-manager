import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({
    message: 'The actual question',
  })
  @Length(3, 255)
  question: string;

  @IsNotEmpty({
    message: 'The quiz id to which the question is associated.',
  })
  quizId: number;
}
