import { Module } from '@nestjs/common';
import { HelloAppModule } from './modules/hello-app/hello-app.module';
import { TrpcModule } from './shared/config/trpc/trpc.module';

@Module({
  imports: [TrpcModule, HelloAppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
