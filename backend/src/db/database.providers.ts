import { Options } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { DatabaseConfiguration } from "src/config/db.configuraiton";
import { User } from "src/users/users.entity";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async (configService: DatabaseConfiguration) => {
      const databaseConfig = configService.getDatabaseConfig();

      const sequelize = new Sequelize({
        ...databaseConfig,
        dialect: databaseConfig.dialect as Options["dialect"],
      });

      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [DatabaseConfiguration],
  },
];
