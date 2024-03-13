import { Sequelize } from "sequelize-typescript";
import { DatabaseConfiguration } from "src/config/db.configuraiton";
export declare const databaseProviders: {
    provide: string;
    useFactory: (configService: DatabaseConfiguration) => Promise<Sequelize>;
    inject: (typeof DatabaseConfiguration)[];
}[];
