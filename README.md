# <img src="https://dl.dropboxusercontent.com/s/vr69eaqnvvm0kip/git_icon.png" width="24"> KDM 1.6 Story app



The repository contains source code for the Kingdom Death: Monster companion story app.

Current release version is **3.6.1**: https://kdm-story.site

Web version: http://web.kdm-story.site/  (reflects master branch state)

See changelog at: https://kdm-story.site/changelog

# How to work with the source

## Preparations

To build the app one needs to:

1. Install npm: https://www.npmjs.com/get-npm
2. Install git lfs (it is used to handle large files): https://git-lfs.github.com
> \>\> git lfs install
3. Clone the repository:
> \>\> git clone git@github.com:prikhodkop/kdm_story_app.git
4. Install required node_modules:
> \>\> npm install

## Building

### For dev builds:

> \>\> npm run webpack

The app will run in browser at http://0.0.0.0:8080

This also updates in-app directory tree. So run it if you are adding new app version, as well.

### For release build:

> \>\> npm run webpack // to create folders list in app

then:

> \>\> npm run dist-win // dist-mac

Build artefacts would be put into ./dist folder.

## Contributions

To have your work added to master branch (from which release builds are eventually created), please submit pull request.

https://help.github.com/en/articles/creating-a-pull-request
