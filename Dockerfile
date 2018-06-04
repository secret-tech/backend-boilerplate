FROM mhart/alpine-node:10.3.0

RUN apk update && apk upgrade && apk add git && apk add python && apk add make && apk add g++ && npm i -g yarn

VOLUME /usr/src/app
EXPOSE 3000
EXPOSE 4000
WORKDIR /usr/src/app


