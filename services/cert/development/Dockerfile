FROM alpine:3.8
COPY . /usr/bin
RUN apk -U --no-cache add openssl
RUN gen.sh
