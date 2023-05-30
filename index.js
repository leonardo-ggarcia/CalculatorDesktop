var { app, BrowserWindow} = require('electron')

function createWindow(){
    let win = new BrowserWindow({
        width:400,
        height:550,
        minHeight: 550,
        minWidth: 400,
        webPreferences:{
            nodeIntegration:true
        },
        autoHideMenuBar: true,
        center: true
    })
    
    win.loadFile('index.html')
}

app.whenReady().then(() =>{
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })   
})

app.on('window-all-closed', () => {
    if(process.platform === 'darwin') app.quit()
})

