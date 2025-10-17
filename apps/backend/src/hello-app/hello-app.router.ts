import { Input, Query, Router } from 'nestjs-trpc';
import { helloAppSchema } from './hello-app.schema';
import { HelloAppService } from './hello-app.service';

@Router()
export class HelloAppRouter {
  constructor(private readonly helloAppService: HelloAppService) {}

  @Query({
    input: helloAppSchema,
    output: helloAppSchema,
  })
  getHelloApp(@Input('name') name: string) {
    return this.helloAppService.getHelloApp(name);
  }
}
