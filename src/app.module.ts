import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiTokenCheckMiddleware } from './common/middleware/api-token-check.middleware';
import { DatabaseConnectionService } from './config/typeOrm.config';
import { AuthModule } from './module/auth/auth.module';
import { QuizModule } from './module/quiz/quiz.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass:DatabaseConnectionService
    }),
    QuizModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ApiTokenCheckMiddleware)
      .forRoutes({path :'*' ,method:RequestMethod.ALL})
  }
}
