import { Input, Mutation, Query, Router, UseMiddlewares } from 'nestjs-trpc';
import { LoggerMiddleware } from 'src/shared/middlewares/logger.middleware';
import z from 'zod';
import { type CreateUser } from './schema/user.schema';
import { UsersService } from './users.services';

@Router({ alias: 'users' })
@UseMiddlewares(LoggerMiddleware)
export class UsersRouter {
  constructor(private readonly usersService: UsersService) {}

  @Query({
    output: z.array(
      z.object({
        id: z.number(),
        email: z.string(),
        password: z.string(),
      }),
    ),
  })
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Mutation({
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6).max(100),
    }),
    output: z
      .object({
        id: z.number(),
        email: z.string(),
        password: z.string(),
      })
      .array(),
  })
  async createUser(@Input() input: CreateUser) {
    return this.usersService.createUser(input);
  }
}
