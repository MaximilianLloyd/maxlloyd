#!/bin/bash

# Clear dist directory
echo "Compiling"
rm -rf ./dist
mkdir dist
mkdir dist/experiments

cp -r css dist/css

node index.js > ./dist/index.html
node experiments.js > ./dist/experiments/index.html
