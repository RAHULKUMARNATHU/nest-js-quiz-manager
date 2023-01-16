import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The Quiz should have title' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  @Length(3)
  description: string;
}
