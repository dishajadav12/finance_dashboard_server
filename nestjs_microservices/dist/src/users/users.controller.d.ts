import { UsersService } from './users.service';
import { FinanceDto } from './userDto/financeDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyUser(params: {
        id: string;
    }, req: any): Promise<{
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
