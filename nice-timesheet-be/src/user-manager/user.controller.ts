import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/1.0')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Post('users:createRandom')
  async createRandomUser() {
    return this.userService.createRandomUser();
  }

  @Get('users/:id')
  async getUserDetails(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post('users')
  async createUser(@Body() request: UserCreationRequest) {
    return this.userService.createUser(request);
  }

}

interface UserCreationRequest {
  firstName: string;
  lastName: string;
  email: string;
}