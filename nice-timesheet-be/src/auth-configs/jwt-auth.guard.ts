import {ExecutionContext, Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    canActivate(context: ExecutionContext) {
        // Add your custom authentication logic here
        // No-op. Al momento lo tengo per riuscire a debuggare
        return super.canActivate(context);
    }

}