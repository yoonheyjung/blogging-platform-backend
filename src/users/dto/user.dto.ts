import { IsEmail, Min, Max, Length } from 'class-validator';

// 회원가입
export class SignUpDto {
  @IsEmail()
  email: string;

  @Length(8, 20)
  pwd: string;

  @Length(2, 15)
  nickname: string;
}

// 로그인
export class SignInDto {
  @IsEmail()
  email: string;
  pwd: string;
}
