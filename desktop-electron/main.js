const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'FansCRM test app',
    width: 1200,
    height: 800,

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createMainWindow();
});

