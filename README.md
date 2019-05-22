# kdm_story_app
KDM Story app for game version 1.5. More info on: https://kdm-story.site

Current release version is 2.3.
See changelog: https://kdm-story.site/changelog

# Preparations

To build the app one needs electron-packager module installed. 
This guide: https://www.christianengvall.se/electron-packager-tutorial/ explains really well how to do it.

# Building

On Windows:

>> electron-packager ./ "Kingdom Death 1.5 Story" --platform win32 --icon "./icon.icns" --overwrite --arch=x64 --verbose --prune=true --out=<path to build>

On Mac:

>> electron-packager ./ "Kingdom Death 1.5 Story" --platform darwin --icon "./icon.icns" --overwrite --arch=x64 --verbose --prune=true --out=<path to build>
