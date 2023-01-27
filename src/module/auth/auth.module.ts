import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from 'src/module/auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  imports: [UserModule, PassportModule ,
  JwtModule.registerAsync(jwtConfig)
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtStrategy, UserService , ],
  exports: [AuthService],
})
export class AuthModule {}
