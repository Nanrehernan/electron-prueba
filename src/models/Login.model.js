const { CrearVentanaPrincipal } = require("./ventana.model")
const path = require("path")
const Conexion = require("./Conexion")
const { Notification } = require("electron")

class ModelLogin {
    static async Login(ventana, {user, password}) {
        try {
            const conexion = await Conexion.getConexion()
            if (conexion != null) {
                const sql = "select * from user where cedula=? and pass=?"
                const response = await conexion.query(sql, [user, password])

                if (response.length > 0) {
                    CrearVentanaPrincipal()
                    ventana.close()
                } else {
                    const notificacion = new Notification({
                        title: "Error",
                        body: "Usuario o Password no es valido"
                    })
                    notificacion.show()
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = ModelLogin