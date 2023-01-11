#!/usr/bin/env bash
npm install
npm run build
cd ..
rm -rf richmiles.github.io/
git clone https://github.com/richmiles/richmiles.github.io.git
rm -rf richmiles.github.io/*
cp -r richmiles/dist/* richmiles.github.io/
cd richmiles.github.io
git add .
git commit -m "Publishing new build"
git push