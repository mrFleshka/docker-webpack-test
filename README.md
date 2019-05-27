## Prepare

Install [DockerHoster](https://github.com/mrFleshka/docker-hoster)

## Install

```bash
docker network create --subnet=172.25.0.0/16 develope
docker-compose up
```

Check [webpack.test](http://webpack.test)

## Features

 - Hot reload for scss + correct maps.
 - Dev server access without port (reverse proxy on main nginx instance).
 - Yarn as package manager (node_modules work correctly on volumes)

## For Windows users

```
route /P add 172.25.0.0 MASK 255.255.0.0 10.0.75.2
pip install docker-windows-volume-watcher
docker-volume-watcher --verbose -e "*.git*" "*node_modules*" "*.docker*" "*.idea*"
```