import { Input, Mutation, Query, Router, UseMiddlewares } from 'nestjs-trpc';
import { LoggerMiddleware } from 'src/shared/middlewares/logger.middleware';
import { z } from 'zod';
import { helloAppSchema, type HelloAppSchema } from './hello-app.schema';
import { HelloAppService } from './hello-app.service';

@Router({ alias: 'helloMyApp' })
@UseMiddlewares(LoggerMiddleware)
export class HelloApp {
  constructor(private readonly helloAppService: HelloAppService) {}

  @Query({
    input: helloAppSchema,
    output: z.string(),
  })
  getHelloApp(@Input('name') name: string) {
    return this.helloAppService.getHelloApp(name);
  }

  @Mutation({
    input: helloAppSchema,
    output: helloAppSchema,
  })
  createHelloApp(@Input() input: HelloAppSchema) {
    return input;
  }
}
