import { Inject, Injectable } from "@nestjs/common";
import { User } from "./users.entity";
import { IAddUserDto } from "./dto/user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @Inject("USERS_REPOSITORY")
    private userRepository: typeof User
  ) {}

  async getAllUser(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
  async getUser(id: number): Promise<User> {
    return this.userRepository.findByPk(id);
  }

  async addUser(userDto: IAddUserDto): Promise<User> {
    const hashedPassword = bcrypt.hash(userDto.password, 10);
    const user = new User({ ...userDto, password: hashedPassword });
    return user.save();
  }
}
