import {Injectable, Logger} from "@nestjs/common";
import KcAdminClient from '@keycloak/keycloak-admin-client';
import {ConfigService} from "@nestjs/config";
import {User} from "./user.entity";
import {Credentials} from "@keycloak/keycloak-admin-client/lib/utils/auth";

@Injectable({})
export class KeycloakAdapterService {

    private readonly keycloakAdminClient;

    constructor(private readonly _configService: ConfigService) {
        const keycloakConfig = {
            realmName: _configService.getOrThrow('KEYCLOAK_REALM'),
            baseUrl: _configService.getOrThrow('KEYCLOAK_URL'),
        };

        this.keycloakAdminClient = new KcAdminClient(keycloakConfig);
        const _ = this.authenticate();
    }

    /**
     * Lo so, fa cagare, ma questo è quello che dice la doc
     * https://www.npmjs.com/package/@keycloak/keycloak-admin-client
     */
    private async authenticate() {

        const credentials: Credentials = {
            grantType: 'client_credentials',
            clientId: this._configService.getOrThrow('KEYCLOAK_ADMIN_CLIENT_ID'),
            clientSecret: this._configService.getOrThrow('KEYCLOAK_ADMIN_CLIENT_SECRET'),
        };

        await this.keycloakAdminClient.auth(credentials);
        Logger.debug('Keycloak admin token has been refreshed');
        // Refresh every minute
        setInterval(() => this.authenticate(), 60 * 1000);
    }


    async findAll(pageNumber: number, pageSize: number) {
        const first = pageNumber * pageSize;
        return await this.keycloakAdminClient.users.find({first, pageSize});
    }

    /**
     * Contacts Keycloak and creates a user
     */
    async createUser(aNewUser: User) {

        return await this.keycloakAdminClient.users.create({
            id: aNewUser.id,
            username: aNewUser.email,
            email: aNewUser.email,
            firstName: aNewUser.firstName,
            lastName: aNewUser.lastName,
            emailVerified: true,
            enabled: true,
        })

    }
}