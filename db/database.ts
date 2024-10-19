import Database from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";

import { DB } from "./db";

// Kysely instance
export const db = new Kysely<DB>({
  dialect: new SqliteDialect({
    database: new Database(process.env.DATABASE_URL || "./db/db.sqlite"),
  }),
  plugins: [], // optional. `Kysely` plugins list. default is `[]`.
});
