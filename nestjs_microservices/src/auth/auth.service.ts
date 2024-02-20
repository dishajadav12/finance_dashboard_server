import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/authdto';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {jwtSecret} from '../utils/constants'
import { Request, Response } from 'express';
import { LoginDto } from './dto/logindto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const { email, password, occupation, name, anualIncome } = dto;
    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await this.hashPassword(password);

    await this.prisma.user.create({
      data: {
        email,
        hashedPassword,
        anualIncome,
        name,
        occupation,
      },
    });

    return { message: 'successful' };
  }

  // Login API

  async login(dto: LoginDto, req: Request, res: Response) {
    const { email, password } = dto;

    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (!foundUser) {
      throw new BadRequestException('Wrong credentials');
    }

    const isMatch = await this.comparePassword({password, hash: foundUser.hashedPassword});
    if (!isMatch) {
        throw new BadRequestException('Wrong credentials');
    }

    //sign jwt and return to the user
    const token = await this.signToken({id: foundUser.id,email: foundUser.email });

    if(!token){
        throw new ForbiddenException()
    }

    res.cookie('token', token);
    return res.send({ message: 'Logged in successfully.'});
  }

  // Logout API

  async signout( req: Request, res: Response) {

    res.clearCookie('token');

    return res.send({ message: 'Logged out successfully.'})
  }


  // Helper function

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(args: {password: string; hash: string}){
    return await bcrypt.compare(args.password, args.hash);

  }

  async signToken(args: {id: string, email: string}){
    const payload = args
    return this.jwt.signAsync(payload, {secret: jwtSecret})
  }
}
