FROM node:16.13.1 as builder
WORKDIR /build/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16.13.1 as app
WORKDIR /usr/src/app/
COPY --from=builder /build/ .

EXPOSE 3001

CMD [ "npm", "run", "preview"]