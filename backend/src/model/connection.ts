import { Pool } from 'pg';

export const connection = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  host: process.env.POSTGRES_HOST || 'database',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  database:  process.env.POSTGRES_DB || 'database',
});
