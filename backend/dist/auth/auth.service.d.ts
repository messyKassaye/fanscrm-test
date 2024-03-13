import { IUserDto } from "src/users/dto/user.dto";
import { User } from "src/users/users.entity";
import { ISignUpDto } from "./dto/auth.dto";
export declare class AuthService {
    private userRepository;
    constructor(userRepository: typeof User);
    findOne(email: string): Promise<User | undefined>;
    signUp(signUpDto: ISignUpDto): Promise<IUserDto>;
}
