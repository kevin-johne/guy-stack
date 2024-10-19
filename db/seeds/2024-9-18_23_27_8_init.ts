import type { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function seed(db: Kysely<any>): Promise<void> {
  await db
    .insertInto("users")
    .values([
      { name: "John Doe", email: "john@doe.com" },
      { name: "Jane Doe", email: "jane@doe.com" },
    ])
    .execute();

  await db
    .insertInto("posts")
    .values([
      { title: "Hello World", content: "This is a test post", user_id: 1 },
      { title: "Hello World 2", content: "This is a test post 2", user_id: 1 },
      { title: "Hello World 3", content: "This is a test post 3", user_id: 2 },
    ])
    .execute();
}
