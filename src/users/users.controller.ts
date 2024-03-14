import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import jwt from 'jsonwebtoken';

import { SignUpDto, SignInDto } from './dto/user.dto';

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

@Controller('users')
export class UserController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }
}
