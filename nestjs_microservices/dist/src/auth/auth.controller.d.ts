/// <reference types="express" />
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authdto';
import { LoginDto } from './dto/logindto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto, req: any, res: any): Promise<import("express").Response<any, Record<string, any>>>;
    signout(req: any, res: any): Promise<import("express").Response<any, Record<string, any>>>;
}
