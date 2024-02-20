import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authdto';
import { LoginDto } from './dto/logindto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto){
    return this.authService.signup(dto);
  }

  
  @Post('login')
  login(@Body() dto: LoginDto, @Req() req, @Res() res) {
    return this.authService.login(dto, req, res);  }

  
  @Get('signout')
  signout(@Req() req, @Res() res){
    return this.authService.signout(req,res);  }
}
