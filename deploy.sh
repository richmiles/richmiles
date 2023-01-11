npm install
npm run build
git clone https://github.com/richmiles/richmiles.github.io.git
rm -rf other-repo/*
cp -r dist/* other-repo/
cd other-repo
git add .
git commit -m "Publishing new build"
git push