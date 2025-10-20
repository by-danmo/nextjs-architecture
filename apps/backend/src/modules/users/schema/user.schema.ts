import * as t from 'drizzle-orm/pg-core';

export const users = t.pgTable('users', {
  id: t.serial('id').primaryKey(),
  email: t.text('email').unique(),
  password: t.text('password').notNull(),
});
