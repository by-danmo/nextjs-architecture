import { Module } from '@nestjs/common';
import { LoggerMiddleware } from 'src/shared/middlewares/logger.middleware';
import { HelloApp } from './hello-app.router';
import { HelloAppService } from './hello-app.service';

@Module({
  providers: [HelloAppService, HelloApp, LoggerMiddleware],
})
export class HelloAppModule {}
