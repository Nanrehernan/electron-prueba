const { app } = require("electron");
const { CrearVentanaLogin } = require("./models/ventana.model");
const Eventos = require("./models/Eventos")

app.whenReady().then(ProcesoPrincipal)

async function ProcesoPrincipal(){
    const ventana = await CrearVentanaLogin()
    Eventos(ventana)
}