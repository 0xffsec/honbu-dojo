# Honbu Dojo

## Introduction

This applications is the SPA to manage applications inside dojo labs.

## Requirements

Docker API Socket (`/var/run/docker.sock`) must be mounted.

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

## Getting Started

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
