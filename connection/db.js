// import postgres pool
const { Pool } = require('pg');

//setup connection pool
const dbPool = new Pool({
  database: 'ini database', //nama databaseku
  port: 5432,
  user: 'nama user', //liat di postgree yg kita buat tabenya
  password: 'Goku_roko786', //password yg kita masukin saat pertama kali install pg
});

//export db pool
module.exports = dbPool;
