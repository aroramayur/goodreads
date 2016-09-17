#!/usr/bin/env bash
echo "creating the webpack bundle"
webpack --config webpack.prod.config.js --progress 
echo "copying the manifest file"
cp manifest.json dist/manifest.json
echo "copying the index.html"
cp index.html dist/index.html
echo "replacing the path to bundle.js"
sed 's/dist\///' index.html >> dist/index.html
echo "Copying icons"
cp -r icons dist/icons/
echo "All set!"
