import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { HelloAppModule } from './hello-app/hello-app.module';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: '../../packages/trpc/server',
    }),
    HelloAppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
