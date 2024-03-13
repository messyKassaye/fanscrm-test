import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { ILoginDto, ISignUpDto } from "./dto/auth.dto";
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    signUp(signUpDto: ISignUpDto): Promise<{
        access_token: string;
    }>;
    login(loginDto: ILoginDto): Promise<{
        access_token: string;
    }>;
}
