import { Module } from '@nestjs/common';
import { HelloAppModule } from './modules/hello-app/hello-app.module';
import { UsersModule } from './modules/users/users.modules';
import { ConfigsModule } from './shared/config/config.module';
import { TrpcModule } from './shared/config/trpc/trpc.module';
import { DbModule } from './shared/db/db.module';

@Module({
  imports: [ConfigsModule, TrpcModule, HelloAppModule, UsersModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
