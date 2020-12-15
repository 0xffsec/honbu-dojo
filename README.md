# Honbu Dojo

## Introduction

This webapp is ment to be used within the [WebDojo](https://github.com/0xffsec/webdojo).

## Requirements

Docker API Socket (`/var/run/docker.sock`) must be mounted.

## Run it!

```sh
docker run -d -p 80:8080 -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/0xffsec/honbu-dojo
```

```yaml
0xffsec-honbu-dojo :
  image: ghcr.io/0xffsec/honbu-dojo
  ports:
    - "80:8080"
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
```

## Development

- Install dependencies.

```sh
npm install
```

## Development

```sh
npm run start:dev
```

## Production

In `production`. Both, client and server, will be bundled and server by the Node application.

```sh
npm run start:prod
```
