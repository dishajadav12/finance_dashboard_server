import {
    ForbiddenException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { Request } from 'express';
  import { PrismaService } from 'prisma/prisma.service';
  import { FinanceDto } from './userDto/financeDto';
  
  @Injectable()
  export class UsersService {
    constructor(private prisma: PrismaService) {}
  
    async getMyUser(id: string, req: Request) {
      const decodedUserInfo = req.user as { id: string; email: string };
  
      const foundUser = await this.prisma.user.findUnique({ where: { id } });
  
      if (!foundUser) {
        throw new NotFoundException();
      }
  
      if (foundUser.id !== decodedUserInfo.id) {
        throw new ForbiddenException();
      }
  
      delete foundUser.hashedPassword;
  
      return { user: foundUser };
    }
  
    async getUsers() {
      const users = await this.prisma.user.findMany();
  
      return { users };
    }

    async financeData(userdto: FinanceDto){
      const {  category, fType, transaction, userId} = userdto;

      await this.prisma.finance.create({
        data: {
          category,
          fType,
          transaction,
          user: {
            connect: { id: userId }, 
          }, 
        }
      })
    }
}