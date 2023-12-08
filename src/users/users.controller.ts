import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { SignUpDto, SignInDto } from './dto/user.dto';
import jwt from 'jsonwebtoken';

// 회원가입
@Controller('signup')
export class SignUpController {
  @Post()
  @HttpCode(200)
  create(@Body() signUpDto: SignUpDto) {
    return 'post sign up';
  }
}

// 로그인
@Controller('signin')
export class SignInController {
  @Get()
  @HttpCode(200)
  create(@Body() signInDto: SignInDto) {
    const accessToken = jwt.sign({
      data: signInDto,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    });

    return 'post sign up';
  }
}
