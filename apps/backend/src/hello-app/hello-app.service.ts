import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class HelloAppService {
  getHelloApp(name: string): string {
    if (!name) throw new NotFoundException('Name are not passed');
    return `Hello, ${name}!`;
  }
}
