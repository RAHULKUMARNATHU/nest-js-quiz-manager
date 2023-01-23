import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
  
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(username);
    if (!user) {
      throw new BadRequestException();
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if  (!isMatch) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
