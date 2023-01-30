import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(username);
    if (!user) {
      throw new BadRequestException();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async generateToken(user: any) {
    return {
      access_token: this.jwtService.sign({
        name: user.name,
        sub: user.id,
        role:user.role
      }),
    };
  }
}
