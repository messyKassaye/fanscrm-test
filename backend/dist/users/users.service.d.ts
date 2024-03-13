import { User } from "./users.entity";
import { IAddUserDto } from "./dto/user.dto";
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    getAllUser(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    addUser(userDto: IAddUserDto): Promise<User>;
}
