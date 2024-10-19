
FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat curl sqlite


## Installing dependencies
FROM base AS deps
WORKDIR /app

# Disabling Telemetry
ENV NEXT_TELEMETRY_DISABLED 1

COPY package.json package-lock.json ./
RUN npm ci


## Frontend build
FROM deps AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/src/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs

EXPOSE 3000

CMD node server.js


## Development
FROM deps AS dev

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV development
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Workaround to persist node_modules in dev container to the host
# Test if node_moudles exists, if not install and run dev
CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev


## Database
FROM base AS db
WORKDIR /data

COPY /db/init.sql .
RUN test -f /data/db.sqlite || (sqlite3 /data/db.sqlite < /data/init.sql)

CMD tail -f /dev/null
