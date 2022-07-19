FROM node:alpine
WORKDIR '/globochallenge'

COPY package.json .
RUN yarn
COPY . .
CMD ["yarn", "start"]
