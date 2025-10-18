import { Module } from '@nestjs/common';
import { HelloAppModule } from './hello-app/hello-app.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [TrpcModule, HelloAppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
