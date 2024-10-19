import { defineConfig } from "kysely-ctl";
import { db } from "./db/database";

function getDateString() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_`;
}

// Kysely ctl config
export default defineConfig({
  kysely: db,
  migrations: {
    // optional.
    // allowJS, // optional. controls whether `.js`, `.cjs` or `.mjs` migrations are allowed. default is `false`.
    getMigrationPrefix: getDateString, // optional. a function that returns a migration prefix. affects `migrate make` command. default is `() => ${Date.now()}_`. getMigrationPrefix
    migrationFolder: "./db/migrations", // optional. name of migrations folder. default is `'migrations'`.
    // migrator, // optional. a `Kysely` migrator instance. default is `Kysely`'s `Migrator`.
    // provider, // optional. a `Kysely` migration provider instance. default is `kysely-ctl`'s `TSFileMigrationProvider`.
  },
  seeds: {
    // optional.
    // allowJS, // optional. controls whether `.js`, `.cjs` or `.mjs` seeds are allowed. default is `false`.
    // provider, // optional. a seed provider instance. default is `kysely-ctl`'s `FileSeedProvider`.
    // seeder, // optional. a seeder instance. default is `kysely-ctl`'s `Seeder`.
    getSeedPrefix: getDateString, // optional. a function that returns a seed prefix. affects `seed make` command. default is `() => ${Date.now()}_`. getSeedPrefix
    seedFolder: "./db/seeds", // optional. name of seeds folder. default is `'seeds'`.
  },
});
