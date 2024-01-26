#!/bin/bash

# Exit in case of error
set -e

npm install
npm run build

# Clone the target repository
TARGET_REPO_DIR="other-repo"

echo "Cloning target repo ${TARGET_REPO_URL}"
git clone https://${ACCESS_TOKEN}@${TARGET_REPO_URL} $TARGET_REPO_DIR

# Copy over the artifacts
rm -rf $TARGET_REPO_DIR/*
cp -r dist/* $TARGET_REPO_DIR/

# Commit and push
cd $TARGET_REPO_DIR

echo "Committing and pushing to ${TARGET_REPO_URL}"
git set remote origin https://${ACCESS_TOKEN}@${TARGET_REPO_URL}

git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git add .
git commit -m "Publishing new build"
git push
