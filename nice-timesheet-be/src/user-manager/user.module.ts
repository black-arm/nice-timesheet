import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import {KeycloakAdapterService} from "./user.keycloak";

@Module({
  controllers: [UserController],
  providers: [UserService,KeycloakAdapterService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserManagerModule {

}