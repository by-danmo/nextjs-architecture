/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ContextOptions, TRPCContext } from 'nestjs-trpc';

@Injectable()
export class AppContext implements TRPCContext {
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(opts: ContextOptions) {
    return {
      req: opts.req,
      res: opts.res,
    };
  }
}
