# KDM 1.5 Story app

The repository contains source code for the Kingdom Death: Monster companion story app.

More info on the app: https://kdm-story.site

Current release version is **2.3**:

**Windows**: [link](http://bit.ly/2JCReqg)

**Mac**: [link](http://bit.ly/2VnfsqD)

See changelog at: https://kdm-story.site/changelog

# How to work with the source

## Preparations

To build the app one needs to:

1. Install npm: https://www.npmjs.com/get-npm
2. Clone the repository: 
> \>\> git clone git@github.com:prikhodkop/kdm_story_app.git
3. Install git lfs (it is used to handle large files): https://git-lfs.github.com
> \>\> git lfs install

## Building

On Windows:

> \>\> electron-packager ./ "Kingdom Death 1.5 Story" --platform win32 --icon ./icon.icns --overwrite --arch=x64 --verbose --prune=true --out=<path to build>

On Mac:

> \>\> electron-packager ./ "Kingdom Death 1.5 Story" --platform darwin --icon ./icon.icns --overwrite --arch=x64 --verbose --prune=true --out=<path to build>
  
## Contributions

To have your work added to master branch (from which release builds are eventually created), please submit pull request.

https://help.github.com/en/articles/creating-a-pull-request
