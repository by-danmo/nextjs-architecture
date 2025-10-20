export const DB_CONNECTION = 'DB_CONNECTION';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as userSchema from '../../../modules/users/schema/user.schema';
export const drizzleAdapter = {
  provide: DB_CONNECTION,
  useFactory: (configService: ConfigService) => {
    const pool = new Pool({
      connectionString: configService.getOrThrow('DB_URL'),
    });

    return drizzle(pool, {
      schema: {
        ...userSchema,
      },
    });
  },
  inject: [ConfigService],
};
