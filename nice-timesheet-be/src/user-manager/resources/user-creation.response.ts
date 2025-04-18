import {ApiProperty} from "@nestjs/swagger";

export class UserCreationResponse {
    @ApiProperty()
    userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }
}