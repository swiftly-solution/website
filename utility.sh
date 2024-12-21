#!/bin/bash

if [ "$1" = "dev-server" ]; then
    npx nodemon --watch server --ext go --signal SIGTERM --exec "cd server; go build main.go; ./main"
    rm server/main
elif [ "$1" = "prod-server" ]; then
    cd server
    go build main.go
    ./main
    rm main
    cd ..
elif [ "$1" = "dev-client" ]; then
    npx nodemon --watch client/src --ext ts,tsx,css --exec "cd client; yarn build"
elif [ "$1" = "prod-client" ]; then
    cd client
    yarn build
    cd ..
fi