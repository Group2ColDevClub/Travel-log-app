const express = require('express'); 
const mongoConnect = require('./config/mongoConnect.js')
const routes = require('./routes');
const verifyToken = require('./middlewares/VerifyToken');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

require('./routes')(app);

// TODO: remove! this is for tests!
app.get('/', verifyToken, (req, res, next) => {
  console.log("success!");
});

app.listen(process.env.Port || 8080, () =>
  console.log("app available on http://localhost:8080/foo/bar")
);
