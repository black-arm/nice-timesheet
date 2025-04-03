import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import * as jwksRsa from "jwks-rsa";
import {TimesheetUser} from "./principal.model";

// https://github.com/auth0/node-jwks-rsa/blob/master/examples/passport-demo/README.md

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {


    constructor(private configService: ConfigService) {

        const kcUrl = configService.getOrThrow('KEYCLOAK_URL');
        const kcRealm = configService.getOrThrow('KEYCLOAK_REALM');
        const kcJwksUri = `${kcUrl}/realms/${kcRealm}/protocol/openid-connect/certs`;

        super({
            secretOrKeyProvider: jwksRsa.passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: kcJwksUri
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    /**
     * The validate() method deserves some discussion.
     * For the jwt-strategy, Passport first verifies the JWT's signature and decodes the JSON.
     * It then invokes our validate() method passing the decoded JSON as its single parameter.
     * Based on the way JWT signing works, we're guaranteed that we're receiving a valid token that we have
     * previously signed and issued to a valid user.
     *
     * As a result of all this, our response to the validate() callback is trivial:
     * we simply return an object containing the userId and username properties.
     * Recall again that Passport will build a user object based on the return value of our validate() method,
     * and attach it as a property on the Request object.
     */
    async validate(payload: KeycloakJwtToken) {
        const principal = new TimesheetUser(payload.sub, payload.email);
        console.info('JWT validation successful for principal: ', principal);
        return principal;
    }

}

interface KeycloakJwtToken {
    sub: string;
    email: string;
}