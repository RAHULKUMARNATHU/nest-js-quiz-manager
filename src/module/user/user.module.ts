import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports:[TypeOrmModule.],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
