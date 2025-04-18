import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {UserService} from './user.service';
import {UserCreationRequest} from "./resources/user-creation.request";
import {UserCreationResponse} from "./resources/user-creation.response";
import {ApiOkResponse} from "@nestjs/swagger";

@Controller('api/1.0')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get("users")
    async getUsers(@Query('pageSize') pageSize: number, @Query('pageNumber') pageNumber: number) {
        return this.userService.getUsers(pageNumber, pageSize);
    }

    @Get('users/:id')
    async getUserDetails(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @ApiOkResponse({
        type: UserCreationResponse,
    })
    @Post('users')
    async createUser(@Body() request: UserCreationRequest) {
        let createdUser = await this.userService.createUser(request);

        return new UserCreationResponse(createdUser.id);
    }

}

