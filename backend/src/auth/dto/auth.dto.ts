import { IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

export class ISignUpDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  phone: string;

  @IsNotEmpty()
  password: string;
}

export interface ILoginDto {
  email: string;
  password: string;
}
