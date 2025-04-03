import {ExecutionContext, Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    canActivate(context: ExecutionContext) {
        return super.canActivate(context); // Call the Passport logic
    }

    // DO NOT REMOVE!!!
    // This is basically UNDOCUMENTED, but it seems the only way to debug
    // authentication errors from 'passport' is to "override" this function
    // to intercept and read the error

    // handleRequest(err: any, user: any, info: any) {
    //     if (err) {
    //         Logger.error(`Authentication error: ${err.message}`);
    //     }
    //     if (info) {
    //         Logger.warn(`Authentication info: ${info.message || info.toString()}`);
    //     }
    //     if (!user) {
    //         Logger.error('No user found during authentication');
    //     }
    //     return user;
    // }


}