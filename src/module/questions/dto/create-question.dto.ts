import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({
    message: 'The actual question',
  })
  
  @Length(3, 255)
  question: string;

 
}
