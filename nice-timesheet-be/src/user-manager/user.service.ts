import {Injectable} from '@nestjs/common';
import {DataSource, Repository} from 'typeorm';
import {User} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {KeycloakAdapterService} from "./user.keycloak";

@Injectable({})
export class UserService {

    constructor(
        private readonly dataSource: DataSource,
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

        // Ma n'annotazione per sta monnezza, no eh?
        let queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const localUser = await queryRunner.manager.save(aNewUser);
            await this.kcAdapter.createUser(aNewUser);

            await queryRunner.commitTransaction();
            return localUser;
        } catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        } finally {
            await queryRunner.release();
        }

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