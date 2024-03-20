const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
    win.setMenu(null)
  }

  app.whenReady().then(() => {
    createWindow()
  })