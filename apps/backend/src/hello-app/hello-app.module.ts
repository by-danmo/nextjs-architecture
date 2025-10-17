import { Module } from '@nestjs/common';
import { HelloAppRouter } from './hello-app.router';
import { HelloAppService } from './hello-app.service';

@Module({
  providers: [HelloAppService, HelloAppRouter],
})
export class HelloAppModule {}
