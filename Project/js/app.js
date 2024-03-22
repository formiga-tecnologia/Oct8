const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({

      fullscreen:true
    })
  
    win.loadFile('index.html')
    win.setMenu(null)
  }

  app.whenReady().then(() => {
    createWindow()
  })