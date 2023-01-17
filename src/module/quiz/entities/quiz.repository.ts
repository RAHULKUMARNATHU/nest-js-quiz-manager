import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from './quiz.entity';

// @EntityRepository(Quiz)
@Injectable()
export class quizRepository extends Repository<Quiz> {


    constructor (private dataSource : DataSource){
        super(Quiz , dataSource.createEntityManager())
}
// sync create({title , description}) : CreateQuizDto :Promise<Quiz>{}
}