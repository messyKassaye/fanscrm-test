import { ConfigService } from "@nestjs/config";
export declare class DatabaseConfiguration {
    private readonly configService;
    constructor(configService: ConfigService);
    getDatabaseConfig(): {
        dialect: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
}
