# kdm_story_app
KDM Story app for game version 1.5. More info on: https://kdm-story.site

Current release version is 2.3.

See changelog at: https://kdm-story.site/changelog

# Preparations

To build the app one needs to:

1. Install npm: https://www.npmjs.com/get-npm
2. Clone the repository: 
> \>\> git clone git@github.com:prikhodkop/kdm_story_app.git
3. Install git lfs (it is used to handle large files): https://git-lfs.github.com
> \>\> git lfs install

# Building

On Windows:

> \>\> electron-packager ./ "Kingdom Death 1.5 Story" --platform win32 --icon ./icon.icns --overwrite --arch=x64 --verbose --prune=true --out=<path to build>

On Mac:

> \>\> electron-packager ./ "Kingdom Death 1.5 Story" --platform darwin --icon ./icon.icns --overwrite --arch=x64 --verbose --prune=true --out=<path to build>
