import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { jwtConstants } from 'src/constants';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [UserModule, PassportModule ,
    JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),
  ],
  controllers:[AuthController],
  providers: [AuthService , JwtStrategy , UserService],
  exports:[AuthService]
})
export class AuthModule {}
