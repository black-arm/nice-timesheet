import { Controller, Get, Post } from '@nestjs/common';
import { DebugService } from './debug.service';

@Controller('api/1.0/debug')
export class DebugController {

  constructor(private readonly debugService: DebugService) {
  }

  @Get()
  getDebugInformation() {
    return this.debugService.readDebugInformation();
  }

  @Post('status')
  postDebugInformation() {
    return this.debugService.readDebugInformation();
  }

}