"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfiguration = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let DatabaseConfiguration = class DatabaseConfiguration {
    constructor(configService) {
        this.configService = configService;
    }
    getDatabaseConfig() {
        return {
            dialect: this.configService.get("DATABASE_DIALECT", "mysql"),
            host: this.configService.get("DATABASE_HOST", "localhost"),
            port: this.configService.get("DATABASE_PORT", 3306),
            username: this.configService.get("DATABASE_USERNAME", "root"),
            password: this.configService.get("DATABASE_PASSWORD", ""),
            database: this.configService.get("DATABASE_NAME", "nest"),
        };
    }
};
DatabaseConfiguration = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DatabaseConfiguration);
exports.DatabaseConfiguration = DatabaseConfiguration;
//# sourceMappingURL=db.configuraiton.js.map