import { Module } from '@nestjs/common';
import { DbModule } from 'src/shared/db/db.module';
import { LoggerMiddleware } from 'src/shared/middlewares/logger.middleware';
import { UsersRouter } from './user.router';
import { UsersService } from './users.services';

@Module({
  imports: [DbModule],
  providers: [UsersService, UsersRouter, LoggerMiddleware],
})
export class UsersModule {}
