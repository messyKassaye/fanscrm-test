import { Inject, Injectable } from "@nestjs/common";
import { IUserDto } from "src/users/dto/user.dto";
import { User } from "src/users/users.entity";
import * as bcrypt from "bcrypt";
import { ISignUpDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    @Inject("USERS_REPOSITORY")
    private userRepository: typeof User
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async signUp(signUpDto: ISignUpDto): Promise<IUserDto> {
    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
    const user = new User({ ...signUpDto, password: hashedPassword });
    await user.save();
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  }
}
