const { BrowserWindow, app } = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        title:"Dream Deal",
        width: 1000,
        height: 680,
        backgroundColor: "white",
        icon: __dirname + '/src/logo/icon.png',
        webPreference: {
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            nodeIntegration: true,
        }
    })
    win.loadFile('index.html');
    // win.removeMenu();
}

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.whenReady().then(createWindow)