const path = require("path")
const { BrowserWindow } = require("electron")

let ventanaPrincipal
let ventanaLogin

async function CrearVentanaPrincipal() {
    const configwindow = {}

    ventanaPrincipal = await new BrowserWindow(configwindow)
    await ventanaPrincipal.loadFile(path.join(__dirname, "../", "../", "public", "index.html"))
    return ventanaPrincipal
}

async function CrearVentanaLogin() {
    const configwindow = {
        width: 350,
        height: 450,
        webPreferences: {
            preload: path.join(__dirname, "../", "controllers", "preload.js")
        }
    }

    ventanaLogin =await new BrowserWindow(configwindow)
    await ventanaLogin.loadFile(path.join(__dirname, "../", "../", "public", "login.html"))
    return ventanaLogin

}

module.exports = {
    CrearVentanaPrincipal,
    CrearVentanaLogin
}