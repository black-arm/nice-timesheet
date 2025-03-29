import { Injectable } from '@nestjs/common';

@Injectable({})
export class DebugService {

  readDebugInformation() {
    return {
      msg: 'ok',
      timestamp: new Date().getTime(),
    };
  }

}