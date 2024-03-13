import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { DatabaseConfiguration } from "./config/db.configuraiton";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: DatabaseConfiguration
  ) {}

  @Get()
  getHello(): string {
    return "Fans CRM";
  }
}
