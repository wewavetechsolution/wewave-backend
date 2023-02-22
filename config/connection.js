const mysql = require("mysql")
const { db_connection } = require("../constants")

const ConnectTOMysql = () => {
    const connection = mysql.createConnection(db_connection)
    connection.connect(function (err) {
        if (err) console.log(err);
    })
    return connection
}

module.exports = { ConnectTOMysql }