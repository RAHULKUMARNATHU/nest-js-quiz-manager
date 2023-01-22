import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeOrm.config';
import { QuizModule } from './module/quiz/quiz.module';
import { UserModule } from './module/user/user.module';
@Module({
  imports: [ TypeOrmModule.forRootAsync(
    typeOrmConfigAsync
  ) ,QuizModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
