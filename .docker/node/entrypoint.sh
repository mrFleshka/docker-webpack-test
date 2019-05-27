#!/bin/sh

# Init Yarn
yarn

# This will exec the CMD from your Dockerfile
exec "$@"