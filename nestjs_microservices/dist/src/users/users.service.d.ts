import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { FinanceDto } from './userDto/financeDto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyUser(id: string, req: Request): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            hashedPassword: string;
            anualIncome: number;
            occupation: string;
            createdAt: Date;
            updateAt: Date;
        };
    }>;
    getUsers(): Promise<{
        users: {
            id: string;
            email: string;
            name: string;
            hashedPassword: string;
            anualIncome: number;
            occupation: string;
            createdAt: Date;
            updateAt: Date;
        }[];
    }>;
    financeData(userdto: FinanceDto): Promise<void>;
}
