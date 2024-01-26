#!/bin/bash

# Exit in case of error
set -e

npm install
npm run build

pwd  # Print the current directory
ls -la  # List all files and directories in the current directory

# Clone the target repository
TARGET_REPO_DIR="other-repo"

git remote set-url origin https://${ACCESS_TOKEN}@${TARGET_REPO_URL}
git clone $TARGET_REPO_URL $TARGET_REPO_DIR
rm -rf $TARGET_REPO_DIR/*
cp -r dist/* $TARGET_REPO_DIR/


# Commit and push
cd $TARGET_REPO_DIR
git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git add .
git commit -m "Publishing new build"
git push
