import { Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class HelloAppService {
  private readonly logger = new Logger(HelloAppService.name);

  getHelloApp(name: string): string {
    if (!name) throw new NotFoundException('Name are not passed');
    this.logger.log(`Fetching HelloApp for name: ${name}`);
    return `Hello, ${name}`;
  }
}
