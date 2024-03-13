import { AppService } from "./app.service";
import { DatabaseConfiguration } from "./config/db.configuraiton";
export declare class AppController {
    private readonly appService;
    private readonly configService;
    constructor(appService: AppService, configService: DatabaseConfiguration);
    getHello(): string;
}
