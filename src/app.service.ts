import { Injectable } from '@nestjs/common';

// class Leak {
//
// }
// const leak = [];

@Injectable()
export class AppService {
  getHello(): string {
    // leak.push(new Leak());
    return 'Hello World!';
  }
}
