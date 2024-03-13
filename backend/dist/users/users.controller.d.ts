import { UserService } from "./users.service";
import { IAddUserDto, IUserDto } from "./dto/user.dto";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }[]>;
    getUser(param: any): Promise<IUserDto[]>;
    addUser(userDto: IAddUserDto): Promise<IUserDto>;
}
