import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DatabaseConfiguration {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseConfig() {
    return {
      dialect: this.configService.get<string>("DATABASE_DIALECT", "mysql"),
      host: this.configService.get<string>("DATABASE_HOST", "localhost"),
      port: this.configService.get<number>("DATABASE_PORT", 3306),
      username: this.configService.get<string>("DATABASE_USERNAME", "root"),
      password: this.configService.get<string>("DATABASE_PASSWORD", ""),
      database: this.configService.get<string>("DATABASE_NAME", "nest"),
    };
  }
}
