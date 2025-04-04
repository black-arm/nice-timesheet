import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable({})
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>) {
    }

    async createUser(request: UserCreationCommand) {
        const id = crypto.randomUUID();
        const aNewUser = new User({
            id,
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
        });

        return await this.userRepository.save(aNewUser);
    }

    async createRandomUser() {

        const aRandomuser = new User({
            id: crypto.randomUUID(),
            firstName: Math.random().toString(36).substring(2, 15),
            lastName: Math.random().toString(36).substring(2, 15),
            email: Math.random().toString(36).substring(2, 15) + '@autogenerated.com',
        });

        await this.userRepository.save(aRandomuser);
        // await this.entityManager.save(aRandomuser);
    }

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUser(id: string) {
        return await this.userRepository.findOneBy({id});
    }

}

interface UserCreationCommand {
    firstName: string;
    lastName: string;
    email: string;
}