FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

ARG CONTENT_REPO_GITHUB=""
ARG CONTENT_REPO_GITHUB_TOKEN=""
ARG CONTENT_REPO_BRANCH="main"

RUN npm run build

# -----------

FROM node:18-alpine AS runner

USER node

ENV NODE_ENV production

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
EXPOSE 3000

COPY --from=build /app/.output /app

CMD ["node", "/app/server/index.mjs"]
