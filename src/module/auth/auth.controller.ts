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
  import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
  

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
   @UsePipes(ValidationPipe)
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
      return this.authService.generateToken(loginDto);
    }
  

    @UseGuards(JwtAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any> {
      return req.user;
    }
  }