const {
  app,
  BrowserWindow,
  Menu,
  protocol,
  ipcMain,
  dialog,
  Notification,
} = require('electron')
const log = require('electron-log')
const ProgressBar = require('electron-progressbar')

const { autoUpdater } = require('electron-updater')

// let updater
var progressbar
autoUpdater.autoDownload = false

app.commandLine.appendSwitch('--autoplay-policy', 'no-user-gesture-required')

let template = []
// if (process.platform === 'darwin') {
// OS X
const name = app.getName()
template.unshift({
  label: name,
  submenu: [
    {
      label: 'About ' + name,
      role: 'about',
    },
    {
      label: 'Dev Tools',
      accelerator: 'Command+I',
      click () { win.webContents.openDevTools() },
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click () {
        if (!(progressbar == null)) {
          progressbar.close()
        };
        app.quit()
      },
    },
  ],
})
// }

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    // width: 1440,
    // height: 900,
    // resizable: false,
    resizable: true,
    fullscreen: true,
    webPreferences: {
      devTools: true,
      preload: 'js/jquery.min.js',
      nodeIntegration: true,
      // preload: 'js/jquery-ui.js'
    },
    backgroundColor: '#000000',
    title: 'KDM 1.5 Story',
    // frame: false,
  })

  // global.sharedObj = {path: app.getPath('userData')};

  // and load the index.html of the app.
  win.removeMenu();
  win.loadFile('index.html')
  // win.webContents.openDevTools();
}

let win

function sendStatusToWindow (text) {
  log.info(text)
  // win.webContents.send('message', text);
  // console.log(text)
}
// function createDefaultWindow() {
//   win = new BrowserWindow();
//   win.webContents.openDevTools();
//   win.on('closed', () => {
//     win = null;
//   });
//   win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
//   return win;
// }
autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...')
})
// autoUpdater.on('update-available', (info) => {
//   sendStatusToWindow('Update available.');
// })

autoUpdater.on('update-available', () => {
  // if (process.platform in ["win32", "osx"]) {
  if (true) {
    dialog.showMessageBox({
      title: 'Update ready',
      message: 'New app version was released!\nPlease download it from:\nhttps://kdm-story.site.',
    })
  } else {
    dialog.showMessageBox({
      type: 'info',
      title: 'Found Updates',
      message: 'Found updates, do you want update now?',
      buttons: ['Yes', 'No'],
    }, (buttonIndex) => {
      if (buttonIndex === 0) {
        autoUpdater.downloadUpdate()
        progressbar = new ProgressBar({
          indeterminate: false,
          value: 0,
          maxValue: 100,
          browserWindow: {
            text: 'Downloading update',
            detail: 'Wait...',
            parent: win,
            webPreferences: {
              nodeIntegration: true,
            },
            minimizable: true,
            closable: true,
            resizable: true,
          },
        })

        progressbar.on('completed', function () {
          log.info(`completed...`)
          progressbar.detail = 'Finished download!'
        })
        progressbar.on('aborted', function (value) {
          log.info(`aborted! ${value}%`)
        })
        progressbar.on('progress', function (value) {
          sendStatusToWindow(`Downloaded ${value}%...`)
          progressbar.detail = `Downloaded: ${value}%`
        })
      } else {
        // updater.enabled = true
        // updater = null
      }
    })
  }
})

// autoUpdater.on('update-not-available', (info) => {
//   sendStatusToWindow('Update not available.');
// })
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err)
  dialog.showMessageBox({
    title: 'Error:',
    message: 'Error in auto update: ' + err,
  })
  // updater.enabled = true
  // updater = null
})
let prevPercent = 0

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = 'Download speed: ' + progressObj.bytesPerSecond
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%'
  log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')'
  sendStatusToWindow(log_message)
  // dialog.showMessageBox({
  //   title: 'Download progress',
  //   message: log_message
  // })
  // let myNotification = new Notification('Update:', {
  //   body: log_message
  // });
  if (Math.floor(progressObj.percent) - prevPercent > 0) {
    progressbar.value += Math.floor(progressObj.percent) - prevPercent
    prevPercent = Math.floor(progressObj.percent)
  };
})
// autoUpdater.on('update-downloaded', (info) => {
//   sendStatusToWindow('Update downloaded');
// });

autoUpdater.on('update-not-available', () => {
  // dialog.showMessageBox({
  //   title: 'No Updates',
  //   message: 'Current version is up-to-date.'
  // })
  sendStatusToWindow('Current version is up-to-date.')
  // updater.enabled = true
  // updater = null
})

autoUpdater.on('update-downloaded', () => {
  progressbar.setCompleted()
  dialog.showMessageBox({
    title: 'Install Updates',
    message: 'Updates downloaded, application will restart to update...',
  }, () => {
    setImmediate(() => autoUpdater.quitAndInstall())
  })
})

app.on('ready', function () {
  // Create the Menu
  // const menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu)

  createWindow()
})
app.on('window-all-closed', () => {
  if (!(progressbar == null)) {
    progressbar.close()
  };
  app.quit()
})

app.on('ready', function () {
  // autoUpdater.checkForUpdatesAndNotify();
  log.info('Checking for update...')
  autoUpdater.checkForUpdates()
  log.info('Done checking!')
})

process.on('uncaughtException', function (error) {
  log.warn(error)
})

// app.on('ready', createWindow)
