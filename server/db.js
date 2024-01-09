//import necessry libaries
const Pool = require("pg").Pool;

//fill with data
const pool = new Pool({
    user: "postgres",
    password: "2020230", //master password 
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

//export to use in other files
module.exports = pool;