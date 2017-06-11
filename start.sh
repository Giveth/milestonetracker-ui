#!/bin/sh

cd /src
#node ./bin/testrpc --deterministic &

sleep 5

cd /src/milestonetracker-ui/node_modules/givethdirectory
node env.js

cd /src/milestonetracker-ui/
npm start
