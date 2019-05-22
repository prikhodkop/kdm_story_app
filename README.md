# kdm_story_app
KDM Story app for game version 1.5. More info on: https://kdm-story.site

# Building

On Windows:

electron-packager ./ "Kingdom Death 1.5 Story" --platform win32 --icon "./icon.icns" --overwrite --arch=x64 --verbose --prune=true --out=<path to build>

On Mac:

electron-packager ./ "Kingdom Death 1.5 Story" --platform darwin --icon "./icon.icns" --overwrite --arch=x64 --verbose --prune=true --out=<path to build>
