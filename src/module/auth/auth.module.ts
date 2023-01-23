import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from 'src/module/auth/local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}
