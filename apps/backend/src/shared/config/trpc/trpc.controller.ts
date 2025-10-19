import { All, Controller, Inject, OnModuleInit } from '@nestjs/common';
import { AnyRouter } from '@trpc/server';
import { AppRouterHost } from 'nestjs-trpc';
import { renderTrpcPanel } from 'trpc-ui';

@Controller()
export class TrpcController implements OnModuleInit {
  private appRouter!: AnyRouter;
  constructor(
    @Inject(AppRouterHost) private readonly appRouterHost: AppRouterHost,
  ) {}

  onModuleInit() {
    this.appRouter = this.appRouterHost.appRouter;
  }

  @All('/docs')
  panel() {
    return renderTrpcPanel(this.appRouter, {
      // FIXME: Get the api url from the env varaible
      url: 'http://localhost:4000/trpc',
    });
  }
}
