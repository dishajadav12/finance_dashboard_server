import { Body, Controller, Get, Param, Post, Req, UseGuards, Res } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UsersService } from './users.service';
import { FinanceDto } from './userDto/financeDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req) {
    return this.usersService.getMyUser(params.id, req);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('data')
  financeData(@Body() userdto: FinanceDto,){
    return this.usersService.financeData(userdto); 
  }
}