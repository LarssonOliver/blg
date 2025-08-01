# See this issue why we don't use alpine https://github.com/WiseLibs/better-sqlite3/issues/716
FROM --platform=$BUILDPLATFORM node:22 AS build

WORKDIR /app

RUN corepack enable

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

# -----------

FROM node:22-alpine AS runner

ENV NODE_ENV=production

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE ${NUXT_PORT}

COPY --from=build /app/.output /app

CMD ["node", "/app/server/index.mjs"]
