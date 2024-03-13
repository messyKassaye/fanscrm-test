import { Model } from "sequelize-typescript";
export declare class User extends Model {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
}
