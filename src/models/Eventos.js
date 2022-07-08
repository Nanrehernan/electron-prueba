const {ipcMain} = require("electron")
const ControllerLogin = require("./Login.model")

function Eventos(ventana){
    ipcMain.handle("login", (e, user)=>{
        ControllerLogin.Login(ventana, user)
    })
}

module.exports = Eventos