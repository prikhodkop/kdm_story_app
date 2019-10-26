#!/usr/bin/env bash

VERSION=${1?test}

mkdir -p ../release

perl -i -pe "s/(window\.globals\.version =).*/\1 '${VERSION}'/" index.html

rm -r "../release/Kingdom Death 1.5 Story v.${VERSION}"

electron-packager ./ "Kingdom Death 1.5 Story" --platform darwin --app-version ${VERSION} --icon ./icon.icns --overwrite --arch=x64 --verbose --prune=true --out=../release

ln -s /Applications "../release/Kingdom Death 1.5 Story-darwin-x64/Applications"

rm -r "../release/Kingdom Death 1.5 Story-darwin-x64/LICENSE"
rm -r "../release/Kingdom Death 1.5 Story-darwin-x64/LICENSES.chromium.html"
rm -r "../release/Kingdom Death 1.5 Story-darwin-x64/version"

mv "../release/Kingdom Death 1.5 Story-darwin-x64" "../release/Kingdom Death 1.5 Story v.${VERSION}"


# electron-packager ./ "Kingdom Death 1.5 Story" --platform win32 --app-version ${VERSION} --icon ./icon.ico --overwrite --arch=x64 --verbose --prune=true --out=../release
