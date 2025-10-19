import { Module } from '@nestjs/common';
import { drizzleAdapter } from './adapters/drizzle.adapter';

@Module({
  providers: [drizzleAdapter],
})
export class DbModule {}
