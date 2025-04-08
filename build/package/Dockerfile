FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

# -----------

FROM node:22-alpine AS runner

ENV NODE_ENV production

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
EXPOSE 3000

COPY --from=build /app/.output /app

CMD ["node", "/app/server/index.mjs"]
