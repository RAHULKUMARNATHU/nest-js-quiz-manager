import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { QuizModule } from './module/quiz/quiz.module';
import { UserModule } from './module/user/user.module';
import ormconfig from './ormconfig'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ormconfig),
    EventEmitterModule.forRoot(),
    QuizModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//       consumer.apply(ApiTokenCheckMiddleware)
//       .forRoutes({path :'*' ,method:RequestMethod.ALL})
//   }
// }
