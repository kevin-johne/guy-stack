# Full Stack TypeScript Boilerplate

This is a full stack boilerplate for TypeScript, React, Next.js, TailwindCSS, and more.

## Deployment

This stack has containerisation built in, NextJS, and the DB are in a container. Kamal will be used for deployment.

## Styling

Still need to decide on a component library, ant design, adobe aria, or basic tailwind.

## Routing

This is the standard Next.js routing, using combination of actions and api for server data. A server action imported to the client becomes a POST request to the server, and the response is returned as a promise.

React Query is installed for state synchronization between the client and server. You can use server actions part of react query instead of an API.

## DB

The database setup is unconventional, but this is awesome and hope more will use it. The database is SQLlite, Kysely for db connections and types-safe queries.

SQLlite doesn't require any setup or different service, this can be hosted alongside the app. Which makes querying data super fast.

Kysely is a TypeScript query builder supporting a wide range of dialects. I like that the queries have a sql like syntax, which makes it easy to read and write.

The schema is generated based on the current tables, and has good typings while writing super performant queries.

The migrations of db can be initiated by making a new migration file

```bash
npm run db:migrate make [name] # this creates a new migration file ie. `2024-9-18_23_3_14_init.ts`, the migration order is based on file name.

npm run db:migrate up # Will run the latest pending migration

npm run db:codegen # Will generate the db types based on the current migrations.
```

And the seeding of db can be initiated by making a new seed file

```bash
npm run db:seed make [name] # Will this creates a new seed file.

npm run db:seed run # Will run all seeds.
```

### Caveats

Migrations need have to have a clean up and down function, otherwise the step fails, and the migration is not executed again.

Typing in the migration files are any instead of the current DB types, as this is a chicken and egg problem. Maybe there could be a type snapshot as a requirement for the migration to work?

## Issues

Using Turbo during dev is not HMR. Maybe needs different env vars to tell to pool changes.

## TODO

- [ ] Renaming files doesn't propagate to the files.
