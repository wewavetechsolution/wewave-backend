const { ConnectTOMysql } = require("../config/connection")

const connection = ConnectTOMysql()

const getBannerDeta = async (table) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, rows) => {
            if (err) reject(err)
            if (rows) resolve(rows)
        })
    })
}

module.exports = { getBannerDeta }