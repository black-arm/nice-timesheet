import {ApiProperty} from "@nestjs/swagger";

export class UserCreationRequest {
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
}