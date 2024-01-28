#!/bin/bash

# Exit in case of error
set -e

npm install
npm run build

# Clone the target repository
TARGET_REPO_DIR="other-repo"

echo "Cloning target repo ${TARGET_REPO_URL} into ${TARGET_REPO_DIR}"
git clone https://x-access-token:${ACCESS_TOKEN}@${TARGET_REPO_URL} $TARGET_REPO_DIR

# Copy over the artifacts
# Remove everything in the target repo directory except for the .git directory
find $TARGET_REPO_DIR -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} \;

# Hack to make 404.html work on GitHub Pages
echo "Copying 404.html to dist/404.html"
cp dist/index.html dist/404.html

ls -la dist

# Copy over the artifacts
echo "Copying artifacts from dist to ${TARGET_REPO_DIR}"
cp -R dist/* $TARGET_REPO_DIR/

# Commit and push
cd $TARGET_REPO_DIR

echo "Checking for changes"
CHANGED_FILES=$(git diff --name-only)
if [ -z "$CHANGED_FILES" ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
else
    echo "Changed files:"
    echo "$CHANGED_FILES"
fi

echo "Committing and pushing to ${TARGET_REPO_URL}"

git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git add .
git commit -m "Publishing new build"
git push
