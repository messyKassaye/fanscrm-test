import {
  Body,
  Controller,
  NotFoundException,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { ILoginDto, ISignUpDto } from "./dto/auth.dto";
import { Public } from "./decorators/public.decorators";
import * as bcrypt from "bcrypt";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService
  ) {}

  @Public()
  @Post("/signup")
  async signUp(@Body() signUpDto: ISignUpDto) {
    const user = await this.authService.signUp(signUpDto);

    const payload = { sub: user.id, username: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token: access_token,
    };
  }

  @Public()
  @Post("/login")
  async login(@Body() loginDto: ILoginDto): Promise<{ access_token: string }> {
    const user = await this.authService
      .findOne(loginDto.email)
      .then((user) => user)
      .catch((err) => err);

    const isPasswordMatched = await bcrypt.compare(
      loginDto.password,
      user.password
    );
    if (!isPasswordMatched) {
      throw new NotFoundException();
    }

    const payload = { sub: user.id, username: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token: access_token,
    };
  }
}
