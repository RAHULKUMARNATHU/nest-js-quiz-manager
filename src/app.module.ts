import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeOrm.config';
import { AuthModule } from './module/auth/auth.module';
import { QuizModule } from './module/quiz/quiz.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [ TypeOrmModule.forRootAsync(
    typeOrmConfigAsync
  ) ,QuizModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
