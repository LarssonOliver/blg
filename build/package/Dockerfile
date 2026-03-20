FROM --platform=$BUILDPLATFORM node:24-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . ./

RUN npm run build

# -----------

FROM node:24-alpine AS runner

ENV NODE_ENV=production

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE ${NUXT_PORT}

COPY --from=build /app/.output /app

CMD ["node", "/app/server/index.mjs"]
