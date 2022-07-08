const mysql = require("promise-mysql")

const configDB = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "personal05",
    database: "ferreteria_monday"
}

class Conexion {

    static getConexion() {
        try {
            const conexion = mysql.createConnection(configDB)
            return conexion
        } catch (e) {
            return null
        }
    }
}

module.exports = Conexion