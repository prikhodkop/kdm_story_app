#!/usr/bin/env bash

VERSION=${1?test}

mkdir -p ../release

perl -pe"s/##VERSION##/${VERSION}/g" index_template.html > index.html

electron-packager ./ "Kingdom Death 1.5 Story" --platform darwin --app-version ${VERSION} --icon ./icon.icns --overwrite --arch=x64 --verbose --prune=true --out=../release

# electron-packager ./ "Kingdom Death 1.5 Story" --platform win32 --app-version ${VERSION} --icon ./icon.ico --overwrite --arch=x64 --verbose --prune=true --out=../release
