"use server";

import { db } from "../../../db/database";

export async function multiplyByTwo(input: number = 1) {
  return { number: input * 2 };
}

export async function getInformationFromTheServer(name: string) {
  return `Hello ${name}!`;
}

export async function getLatestsPosts() {
  return await db.selectFrom("posts").selectAll().execute();
}
