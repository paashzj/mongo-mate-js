#!/bin/bash

mkdir -p /data/db
nohup mongod --bind_ip_all >$MONGO_HOME/mongo.stdout.log 2>$MONGO_HOME/mongo.stderr.log &