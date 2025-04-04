import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('api/1.0')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('users:createRandom')
    async createRandomUser() {
        return this.userService.createRandomUser();
    }

    @Get("users")
    async getUsers(@Query('pageSize') pageSize: number, @Query('pageNumber') pageNumber: number) {
        return this.userService.getUsers(pageNumber, pageSize);
    }

    @Get('users/:id')
    async getUserDetails(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Post('users')
    async createUser(@Body() request: UserCreationRequest) {
        let createdUser = await this.userService.createUser(request);

        const response: UserCreationResponse = {
            userId: createdUser.id
        }
        return response;
    }

}

interface UserCreationRequest {
    firstName: string;
    lastName: string;
    email: string;
}

interface UserCreationResponse {
    userId: string;
}