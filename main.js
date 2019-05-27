const {
	app,
	BrowserWindow
} = require('electron')

app.commandLine.appendSwitch('--autoplay-policy', 'no-user-gesture-required')

function createWindow() {
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
			// preload: 'js/jquery-ui.js'
		},
		backgroundColor: '#000000',
		title: 'KDM 1.5 Story',
		// frame: false,
	})

	// and load the index.html of the app.
	win.loadFile('index.html')
	// win.webContents.openDevTools();
}

app.on('ready', createWindow)
