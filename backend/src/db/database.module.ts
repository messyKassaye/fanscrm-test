import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";
import { DatabaseConfiguration } from "src/config/db.configuraiton";

@Module({
  providers: [...databaseProviders, DatabaseConfiguration],
  exports: [...databaseProviders, DatabaseConfiguration],
})
export class DatabaseModule {}
