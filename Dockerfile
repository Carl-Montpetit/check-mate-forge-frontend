FROM node:21-bookworm-slim

WORKDIR /app

COPY . .
RUN npm i

EXPOSE 8080

CMD ["npm", "run", "dev"]
