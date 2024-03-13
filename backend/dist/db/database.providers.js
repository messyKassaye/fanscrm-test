"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db_configuraiton_1 = require("../config/db.configuraiton");
const users_entity_1 = require("../users/users.entity");
exports.databaseProviders = [
    {
        provide: "SEQUELIZE",
        useFactory: async (configService) => {
            const databaseConfig = configService.getDatabaseConfig();
            const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({}, databaseConfig), { dialect: databaseConfig.dialect }));
            sequelize.addModels([users_entity_1.User]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [db_configuraiton_1.DatabaseConfiguration],
    },
];
//# sourceMappingURL=database.providers.js.map