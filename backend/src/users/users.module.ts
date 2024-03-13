import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule],
  controllers: [UsersController],
  providers: [UserService, ...usersProviders],
  exports: [UserService, ...usersProviders]
})
export class UsersModule {}
