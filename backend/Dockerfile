FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .yarnrc.yml ./

RUN corepack enable

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["node", "dist/index.js"]