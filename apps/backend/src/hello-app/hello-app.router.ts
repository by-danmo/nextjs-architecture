import { Input, Query, Router } from 'nestjs-trpc';
import { z } from 'zod';
import { helloAppSchema } from './hello-app.schema';
import { HelloAppService } from './hello-app.service';

@Router()
export class HelloApp {
  constructor(private readonly helloAppService: HelloAppService) {}

  @Query({
    input: helloAppSchema,
    output: z.string(),
  })
  getHelloApp(@Input('name') name: string) {
    return this.helloAppService.getHelloApp(name);
  }
}
