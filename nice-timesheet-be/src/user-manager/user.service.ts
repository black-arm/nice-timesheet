import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {KeycloakAdapterService} from "./user.keycloak";

@Injectable({})
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly kcAdapter: KeycloakAdapterService) {
    }

    async createUser(request: UserCreationCommand) {
        const id = crypto.randomUUID();
        const aNewUser = new User({
            id,
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
        });

        // TODO: Controllo sull'unicità dello username
        // O magari delegare la registrazione a KC

        // TODO: Controllo sulla transazionalità, altrimenti si imputtana tutto
        let localUser = await this.userRepository.save(aNewUser);
        await this.kcAdapter.createUser(aNewUser);

        return localUser;
    }

    async getUsers(pageNumber: number = 0, pageSize: number = 100) {

        let users = await this.userRepository.find({
            take: pageSize,
            skip: pageNumber * pageSize,
        });

        return users;
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