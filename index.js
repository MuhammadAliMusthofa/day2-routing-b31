//pemanggilan package Express
const express = require('express');

//menggunakan package express
const app = express();

//membuat endpoint
app.get('/', function (req, res) {
  res.send('Hello World');
});

//konfigurasi port aplikasi
const port = 3000;
app.listen(port, function () {
  console.log(`server running on port ${port}`);
});
