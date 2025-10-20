import { Module } from '@nestjs/common';
import {
  DB_CONNECTION,
  drizzleAdapter,
} from './adapters/drizzle/drizzle.adapter';

@Module({
  providers: [drizzleAdapter],
  exports: [DB_CONNECTION],
})
export class DbModule {}
