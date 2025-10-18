import { Module } from '@nestjs/common';
import { HelloApp } from './hello-app.router';
import { HelloAppService } from './hello-app.service';

@Module({
  providers: [HelloAppService, HelloApp],
})
export class HelloAppModule {}
