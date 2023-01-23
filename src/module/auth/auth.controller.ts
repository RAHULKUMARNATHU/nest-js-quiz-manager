import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { LoginDto } from './dto/login.dto';
import { localAuthGuard } from 'src/module/auth/local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
  

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
   @UsePipes(ValidationPipe)
   @UseGuards(localAuthGuard)
    @Post('login')
    async login(@Request() req , @Body() loginDto: LoginDto): Promise<any> {
      return this.authService.generateToken(req.user);
    // return req.user;
    }
  

    @UseGuards(JwtAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any> {
      return req.user;
    }
  }