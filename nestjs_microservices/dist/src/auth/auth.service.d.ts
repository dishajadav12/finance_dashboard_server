import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/authdto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { LoginDto } from './dto/logindto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signup(dto: AuthDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    signout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    hashPassword(password: string): Promise<string>;
    comparePassword(args: {
        password: string;
        hash: string;
    }): Promise<boolean>;
    signToken(args: {
        id: string;
        email: string;
    }): Promise<string>;
}
