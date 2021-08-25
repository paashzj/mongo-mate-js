#!/bin/bash

nohup node $MONGO_HOME/mate/server.js >mongo_mate.stdout.log 2>mongo_mate.stderr.log
tail -f /dev/null