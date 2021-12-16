FROM node:14-buster AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

FROM node:14-buster AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NODE_ENV=production
RUN yarn build
RUN ls /app/node_modules/.bin

FROM gcr.io/distroless/nodejs:14 AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD [ "./node_modules/.bin/next", "start" ]
