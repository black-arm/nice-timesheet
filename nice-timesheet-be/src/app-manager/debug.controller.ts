import {Controller, Get, Logger, Post, Request, UseGuards} from '@nestjs/common';
import {DebugService} from './debug.service';
import {JwtAuthGuard} from "../auth-configs/jwt-auth.guard";
import {Principal} from "../auth-configs/principal.decorator";
import {TimesheetUser} from "../auth-configs/principal.model";

@Controller('api/1.0/debug')
export class DebugController {

    constructor(private readonly debugService: DebugService) {
    }

    @Get()
    getDebugInformation() {
        Logger.debug('Health check endpoint pinged');
        return this.debugService.readDebugInformation();
    }

    @UseGuards(JwtAuthGuard)
    @Post('status')
    postDebugInformation(@Principal() principal: TimesheetUser,
                         @Request() request: any) {

        return {
            principal: principal,
            details: this.debugService.readDebugInformation()
        };
    }

}