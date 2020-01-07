const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.maximize();
  // und lade die index.html der App.
  win.loadFile('html/deliveryNote/deliveryNotes.html');
}

app.on('ready', createWindow);
