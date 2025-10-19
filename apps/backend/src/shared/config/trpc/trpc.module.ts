import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { AppContext } from './context/app.context';
import { TrpcController } from './trpc.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: '../../packages/trpc/src/server',
      context: AppContext,
    }),
  ],
  providers: [AppContext],
  controllers: [TrpcController],
})
export class TrpcModule {}
