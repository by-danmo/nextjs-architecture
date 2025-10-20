import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DB_CONNECTION } from 'src/shared/db/adapters/drizzle/drizzle.adapter';

import { eq } from 'drizzle-orm';
import * as schema from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB_CONNECTION) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getUsers() {
    const users = await this.db.query.users.findMany();

    return users;
  }

  async createUser(input: schema.CreateUser) {
    // find user
    const existingUser = await this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, input.email));

    if (existingUser[0]) {
      throw new ConflictException('User already exists');
    }

    const newUser = await this.db
      .insert(schema.users)
      .values(input)
      .returning();

    return newUser;
  }
}
