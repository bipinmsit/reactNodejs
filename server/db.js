const {Pool, Client} = require("pg")

const pool  = new Pool({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:5432,
    database:"perntodo"
})

module.exports = pool