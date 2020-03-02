const {
  app,
  BrowserWindow,
  Menu,
  protocol,
  ipcMain,
  dialog,
  Notification,
} = require('electron')
// const log = require('electron-log')
// const ProgressBar = require('electron-progressbar')

// const { autoUpdater } = require('electron-updater')

// require('v8-compile-cache');



// sessionStorage.setItem('translations', JSON.stringify(tree))


app.commandLine.appendSwitch('--autoplay-policy', 'no-user-gesture-required', '--no-sandbox')
// app.disableHardwareAcceleration();
let template = []
// if (process.platform === 'darwin') {
// OS X
const name = app.getName()

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1440,
    height: 900,
    // resizable: false,
    resizable: true,
    fullscreen: true,
    webPreferences: {
      devTools: true,
      preload: 'js/jquery.min.js',
      nodeIntegration: true,
      // sandbox: false,
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
  // app.disableHardwareAcceleration();
  // win.webContents.openDevTools();
}

let win
// app.enableSandbox()


app.on('ready', function () {
  // Create the Menu
  // const menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu)
  createWindow()
})
