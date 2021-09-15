# Docker

## Container Basic

`docker container ls`
`docker container ls -a` -> semua yang aktif dan tidak aktif
`docker container rm id`

## Images

`docker images` -> image-image yang sudah tersedia system kita
`docker image rm <id>`

case: Pull mongodb

## Container Create & Start

`docker container create --name nama -p 57017:27017 mongo`

`docker container start nama`

case: create mongodb container

> mongo mongodb://localhost:57017

## Docker Build

`docker build -t [namaimage]:[version] [path_dockerfile]`

## Addition

untuk liat log container
`docker logs <idcontainer>`

untuk masuk ke terminal / bash container
`docker exec -it namacontainer /bin/bash`

untuk bersihin container
`docker system prune`

Reaktif
`docker run -p <>:<> -v$(pwd):<workdir docker> <name image>`

## Compose

`docker compose ps` -> liat service compose

`docker-compose up -d`

`docker-compose stop`

`docker-compose down`
