import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './users.services';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
