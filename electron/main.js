const {app, BrowserWindow} = require('electron')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

function createWindow() {
    const mainWin = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWin.loadURL(NODE_ENV === 'development' ? 'http://localhost:3000' : `file://${path.join(__dirname, `../dist/index.html`)}`)
}

app.whenReady().then(() => {
    console.log(123)
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})