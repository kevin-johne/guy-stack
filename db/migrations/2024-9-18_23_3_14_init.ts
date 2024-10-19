import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable("users")
    .addColumn("id", "integer", (col) =>
      col.notNull().primaryKey().autoIncrement(),
    )
    .addColumn("name", "varchar", (col) => col.notNull().unique())
    .addColumn("email", "varchar", (col) => col.notNull().unique())
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .addColumn("updated_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .execute();

  await db.schema
    .createTable("posts")
    .addColumn("id", "integer", (col) =>
      col.notNull().primaryKey().autoIncrement(),
    )
    .addColumn("title", "varchar", (col) => col.notNull())
    .addColumn("content", "varchar", (col) => col.notNull())
    .addColumn("user_id", "integer", (col) =>
      col.notNull().references("users.id").onDelete("cascade").notNull(),
    )
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .addColumn("updated_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .execute();

  await db.schema
    .createIndex("posts_user_id_index")
    .on("posts")
    .column("user_id")
    .execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable("users").execute();
  await db.schema.dropTable("posts").execute();
}
