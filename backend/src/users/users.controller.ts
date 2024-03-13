import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { IAddUserDto, IUserDto } from "./dto/user.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("api/v1/")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get("get-all-users")
  async getAllUsers() {
    return (await this.userService.getAllUser()).map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      };
    });
  }

  @UseGuards(AuthGuard)
  @Get("get-user/:id")
  async getUser(@Param() param: any): Promise<IUserDto[]> {
    const { id } = param;
    return await this.userService
      .getUser(id)
      .then((user) => {
        return {
          name: user.name,
          email: user.email,
          phone: user.phone,
        };
      })
      .catch((err) => err);
  }

  @UseGuards(AuthGuard)
  @Post("add-user")
  async addUser(@Body() userDto: IAddUserDto): Promise<IUserDto> {
    return await this.userService.addUser(userDto).then((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      };
    });
  }
}
