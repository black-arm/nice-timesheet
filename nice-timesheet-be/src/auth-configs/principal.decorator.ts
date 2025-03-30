import {createParamDecorator, ExecutionContext} from '@nestjs/common';

/**
 * Questo decorator mi permette di "Estrarre" automaticamente
 * lo user agganciato alla request http.
 * (Lo user viene inserito nella request da Passport, a seguito della validazione del token)
 *
 * Così facendo, nei controller, posso tranquillamente usare:
 * `@Principal currentUser: TimesheetUser`
 *
 */
export const Principal = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);